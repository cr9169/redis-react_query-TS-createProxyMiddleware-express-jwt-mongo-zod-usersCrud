import { Router } from "express";
import { validateRequest } from "../utils/wrappers";
import GroupsController from "./controller";
import * as validationSchemas from "./validation";

export const GroupsRouter = Router();

GroupsRouter.post(
  "/create",
  validateRequest(validationSchemas.createGroupSchema),
  GroupsController.createGroup
);

GroupsRouter.delete(
  "/delete",
  validateRequest(validationSchemas.deleteGroupSchema),
  GroupsController.deleteGroup
);

GroupsRouter.get(
  "/get",
  validateRequest(validationSchemas.getGroupSchema),
  GroupsController.getGroup
);

GroupsRouter.get(
  "/get/allGroups",
  validateRequest(validationSchemas.getAllGroupsSchema),
  GroupsController.getAllGroups
);

GroupsRouter.patch(
  "/update",
  validateRequest(validationSchemas.updateGroupSchema),
  GroupsController.updateGroup
);
