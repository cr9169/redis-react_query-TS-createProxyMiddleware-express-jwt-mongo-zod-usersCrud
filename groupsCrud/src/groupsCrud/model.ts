import mongoose, { Schema } from "mongoose";
import IGroup from "./interface";

const GroupSchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    users: {
      type: [{ type: mongoose.Schema.Types.ObjectId }],
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const GroupModel = mongoose.model<IGroup>("Group", GroupSchema);
