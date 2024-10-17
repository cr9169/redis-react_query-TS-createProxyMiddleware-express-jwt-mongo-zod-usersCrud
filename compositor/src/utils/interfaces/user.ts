import mongoose from "mongoose";

export default interface IUser {
  readonly _id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  groupId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

type Role = "admin" | "dev" | "user";
