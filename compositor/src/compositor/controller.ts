import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/wrappers";
import CompositorManager from "./manager";

export default class CompositorController {
  static getPopulatedUser = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction) => {
      const populatedUser = await CompositorManager.getPopulatedUser(
        req.params.id
      );
      res.status(200).json(populatedUser);
    }
  );

  static getAllUsersPopulated = asyncHandler(
    async (_req: Request, res: Response, _next: NextFunction) => {
      const populatedUsers = await CompositorManager.getAllUsersPopulated();
      res.status(200).json(populatedUsers);
    }
  );

  static getPopulatedGroup = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction) => {
      const popultedGroup = await CompositorManager.getPopulatedGroup(
        req.params.id
      );
      res.status(200).json(popultedGroup);
    }
  );

  static getAllGroupsPopulated = asyncHandler(
    async (_req: Request, res: Response, _next: NextFunction) => {
      const popultedGroups = await CompositorManager.getAllGroupsPopulated();
      res.status(200).json(popultedGroups);
    }
  );
}
