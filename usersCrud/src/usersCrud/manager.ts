import IUser from "./interface";
import { UserModel } from "./model";

export default class UsersManager {
  static async createUser(userDetails: Omit<IUser, "_id">) {
    const emailCheck = await UserModel.findOne({ email: userDetails.email });
    if (emailCheck)
      throw new Error("usersCrud: This email is already in use...");

    const passwordCheck = await UserModel.findOne({
      password: userDetails.password,
    });
    if (passwordCheck)
      throw new Error("usersCrud: This password is already in use...");

    const newUser = await UserModel.create(userDetails);

    if (!newUser) throw new Error("usersCrud: Couldn't create user...");

    return newUser;
  }

  static async deleteUser(userId: string) {
    const existsCheck = await UserModel.findOne({ _id: userId });

    if (!existsCheck) throw new Error("usersCrud: user doesn't exist...");

    const deleteduser = await UserModel.deleteOne({ _id: userId }).exec();

    if (!deleteduser) throw new Error("usersCrud: Couldn't delete user...");

    return deleteduser;
  }

  static async getUser(userId: string) {
    const founduser = await UserModel.findOne({ _id: userId }).exec();

    if (!founduser) throw new Error("usersCrud: user doesn't exist...");

    return founduser;
  }

  static async getAllUsers() {
    const foundusers = await UserModel.find().exec();

    if (!foundusers.length) throw new Error("usersCrud: There are no users...");

    return foundusers;
  }

  static async updateUser(userId: string, userDetails: Omit<IUser, "_id">) {
    const existsCheck = await UserModel.findOne({ _id: userId });

    if (!existsCheck) throw new Error("usersCrud: user doesn't exist...");

    const updateduser = await UserModel.findOneAndUpdate(
      { _id: userId },
      userDetails,
      { new: true }
    ).exec();

    if (!updateduser) throw new Error("usersCrud: Couldn't update user...");

    return updateduser;
  }
}
