import { Router } from "express";
import { validateRequest } from "../utils/wrappers";
import GroupsController from "./controller";
import * as validationSchemas from "./validation";

export const groupsRouter = Router();

groupsRouter.post(
  "/create",
  validateRequest(validationSchemas.createGroupSchema),
  GroupsController.createGroup
);

groupsRouter.delete(
  "/delete",
  validateRequest(validationSchemas.deleteGroupSchema),
  GroupsController.deleteGroup
);

groupsRouter.get(
  "/get",
  validateRequest(validationSchemas.getGroupSchema),
  GroupsController.getGroup
);

groupsRouter.get(
  "/get/allGroups",
  validateRequest(validationSchemas.getAllGroupsSchema),
  GroupsController.getAllGroups
);

groupsRouter.patch(
  "/update",
  validateRequest(validationSchemas.updateGroupSchema),
  GroupsController.updateGroup
);
