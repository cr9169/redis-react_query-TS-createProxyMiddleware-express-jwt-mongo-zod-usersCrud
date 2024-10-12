import mongoose, { Schema } from "mongoose";
import IUser from "./interface";

const UserSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "dev", "user"],
      required: true,
    },
    groupId: {
      type: { type: mongoose.Schema.Types.ObjectId },
      ref: "Group",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<IUser>("User", UserSchema);
