import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/wrappers";
import GroupsManager from "./manager";

export default class GroupsController {
  static createGroup = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const createdGroup = await GroupsManager.createGroup(req.body);
      res.status(200).json(createdGroup);
    }
  );

  static deleteGroup = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const deletedGroup = await GroupsManager.deleteGroup(req.params.id);
      res.status(200).json(deletedGroup);
    }
  );

  static getGroup = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const foundGroup = await GroupsManager.getGroup(req.params.id);
      res.status(200).json(foundGroup);
    }
  );

  static getAllGroups = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const foundGroups = await GroupsManager.getAllGroups();
      res.status(200).json(foundGroups);
    }
  );

  static updateGroup = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const updatedGroup = await GroupsManager.updateGroup(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedGroup);
    }
  );
}
