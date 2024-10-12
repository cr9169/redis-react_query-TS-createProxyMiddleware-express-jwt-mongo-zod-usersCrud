import mongoose from "mongoose";

export default interface IGroup {
  readonly _id: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  users: Array<mongoose.Types.ObjectId>;
  createdAt: Date;
  updatedAt: Date;
}
