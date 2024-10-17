import mongoose from "mongoose";

export default interface IUser {
  readonly _id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  groupId?: string;
  createdAt: Date;
  updatedAt: Date;
}

type Role = "admin" | "dev" | "user";
