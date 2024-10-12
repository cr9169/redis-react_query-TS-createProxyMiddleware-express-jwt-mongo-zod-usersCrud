import { Router } from "express";
import { validateRequest } from "../utils/wrappers";
import UsersController from "./controller";
import * as validationSchemas from "./validation";

export const usersRouter = Router();

usersRouter.post(
  "/create",
  validateRequest(validationSchemas.createUserSchema),
  UsersController.createUser
);

usersRouter.delete(
  "/delete",
  validateRequest(validationSchemas.deleteUserSchema),
  UsersController.deleteUser
);

usersRouter.get(
  "/get",
  validateRequest(validationSchemas.getUserSchema),
  UsersController.getUser
);

usersRouter.get(
  "/get/allUsers",
  validateRequest(validationSchemas.getAllUsersSchema),
  UsersController.getAllUsers
);

usersRouter.patch(
  "/update",
  validateRequest(validationSchemas.updateUserSchema),
  UsersController.updateUser
);
