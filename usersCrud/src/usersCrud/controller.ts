import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/wrappers";
import UsersManager from "./manager";

export default class UsersController {
  static createUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const createdUser = await UsersManager.createUser(req.body);
      res.status(200).json(createdUser);
    }
  );

  static deleteUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const deletedUser = await UsersManager.deleteUser(req.params.id);
      res.status(200).json(deletedUser);
    }
  );

  static getUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const foundUser = await UsersManager.getUser(req.params.id);
      res.status(200).json(foundUser);
    }
  );

  static getAllUsers = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const foundUsers = await UsersManager.getAllUsers();
      res.status(200).json(foundUsers);
    }
  );

  static updateUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const updatedUser = await UsersManager.updateUser(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedUser);
    }
  );
}
