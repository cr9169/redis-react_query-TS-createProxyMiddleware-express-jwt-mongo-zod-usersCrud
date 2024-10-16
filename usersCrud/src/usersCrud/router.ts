import { Router } from "express";
import { validateRequest } from "../utils/wrappers";
import UsersController from "./controller";
import * as validationSchemas from "./validation";

export const UsersRouter = Router();

UsersRouter.post(
  "/create",
  validateRequest(validationSchemas.createUserSchema),
  UsersController.createUser
);

UsersRouter.delete(
  "/delete",
  validateRequest(validationSchemas.deleteUserSchema),
  UsersController.deleteUser
);

UsersRouter.get(
  "/get",
  validateRequest(validationSchemas.getUserSchema),
  UsersController.getUser
);

UsersRouter.get(
  "/get/allUsers",
  validateRequest(validationSchemas.getAllUsersSchema),
  UsersController.getAllUsers
);

UsersRouter.patch(
  "/update",
  validateRequest(validationSchemas.updateUserSchema),
  UsersController.updateUser
);
