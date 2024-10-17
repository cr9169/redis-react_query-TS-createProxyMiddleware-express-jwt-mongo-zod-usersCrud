import axios, { AxiosError } from "axios";
import config from "../config";
import IUser from "../utils/interfaces/user";
import IGroup from "../utils/interfaces/group";

interface PopulatedUser {
  userData: IUser;
  group: IGroup | null;
}

interface PopulatedGroup {
  group: IGroup;
  users: (IUser | null)[];
}

export default class CompositorManager {
  private static async fetchData<T>(url: string): Promise<T> {
    return axios
      .get<T>(url)
      .then((response) => response.data)
      .catch((error: AxiosError) => {
        console.error(`Error fetching data from ${url}:`, error.message);
        throw error;
      });
  }

  static async getPopulatedUser(userId: string): Promise<PopulatedUser> {
    const user = await this.fetchData<IUser>(
      `${config.usersService.connectionString}/users/${userId}`
    );
    const group = await this.fetchData<IGroup>(
      `${config.groupsService.connectionString}/groups/${user.groupId}`
    ).catch((error: AxiosError) => {
      console.error(`Error fetching group for user ${userId}:`, error.message);
      return null;
    });

    return {
      userData: user,
      group,
    };
  }

  static async getAllUsersPopulated(): Promise<PopulatedUser[]> {
    const allUsers = await this.fetchData<IUser[]>(
      `${config.usersService.connectionString}/users`
    );

    return Promise.all(
      allUsers.map(async (user) => {
        const group = await this.fetchData<IGroup>(
          `${config.groupsService.connectionString}/groups/${user.groupId}`
        ).catch((error: AxiosError) => {
          console.error(
            `Error fetching group for user ${user._id}:`,
            error.message
          );
          return null;
        });

        return {
          userData: user,
          group,
        };
      })
    );
  }

  static async getPopulatedGroup(groupId: string): Promise<PopulatedGroup> {
    const group = await this.fetchData<IGroup>(
      `${config.groupsService.connectionString}/groups/${groupId}`
    );

    const populatedUsers = await Promise.all(
      group.users.map((userId) =>
        this.fetchData<IUser>(
          `${config.usersService.connectionString}/users/${userId}`
        ).catch((error: AxiosError) => {
          console.error(
            `Error fetching user ${userId} for group ${groupId}:`,
            error.message
          );
          return null;
        })
      )
    );

    return {
      group,
      users: populatedUsers,
    };
  }

  static async getAllGroupsPopulated(): Promise<PopulatedGroup[]> {
    const allGroups = await this.fetchData<IGroup[]>(
      `${config.groupsService.connectionString}/groups`
    );

    return Promise.all(
      allGroups.map((group) => this.getPopulatedGroup(group._id.toString()))
    );
  }
}
