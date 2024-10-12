import IGroup from "./interface";
import { GroupModel } from "./model";

export default class GroupsManager {
  static async createGroup(groupDetails: IGroup) {
    const existsCheck = await GroupModel.findOne({ name: groupDetails.name });

    if (existsCheck)
      throw new Error("groupsCrud: This name is already occupied...");

    const newGroup = await GroupModel.create({
      ...groupDetails,
      users: [],
    });

    if (!newGroup) throw new Error("groupsCrud: Couldn't create group...");

    return newGroup;
  }

  static async deleteGroup(groupId: string) {
    const existsCheck = await GroupModel.findOne({ id: groupId });

    if (!existsCheck) throw new Error("groupsCrud: Group doesn't exist...");

    const deletedGroup = await GroupModel.deleteOne({ id: groupId }).exec();

    if (!deletedGroup) throw new Error("groupsCrud: Couldn't delete group...");

    return deletedGroup;
  }

  static async getGroup(groupId: string) {
    const foundGroup = await GroupModel.findOne({ id: groupId }).exec();

    if (!foundGroup) throw new Error("groupsCrud: Group doesn't exist...");

    return foundGroup;
  }

  static async getAllGroups() {
    const foundGroups = await GroupModel.find().exec();

    if (!foundGroups.length)
      throw new Error("groupsCrud: There are no groups...");

    return foundGroups;
  }

  static async updateGroup(groupId: string, groupDetails: Omit<IGroup, "id">) {
    const existsCheck = await GroupModel.findOne({ id: groupId });

    if (!existsCheck) throw new Error("groupsCrud: Group doesn't exist...");

    const updatedGroup = await GroupModel.findOneAndUpdate(
      { id: groupId },
      groupDetails,
      { new: true }
    ).exec();

    if (!updatedGroup) throw new Error("groupsCrud: Couldn't update group...");

    return updatedGroup;
  }
}
