import { Router } from "express";
import { validateRequest } from "../utils/wrappers";
import CompositorController from "./controller";
import * as validationSchemas from "./validation";

export const CompositorRouter = Router();

CompositorRouter.get(
  "/populated",
  validateRequest(validationSchemas.getPopulatedUserSchema),
  CompositorController.getPopulatedUser
);

CompositorRouter.get(
  "/allPopulated",
  validateRequest(validationSchemas.getAllUsersPopulatedSchema),
  CompositorController.getAllUsersPopulated
);

CompositorRouter.get(
  "/populated",
  validateRequest(validationSchemas.getPopulatedGroupSchema),
  CompositorController.getPopulatedGroup
);

CompositorRouter.get(
  "/allPopulated",
  validateRequest(validationSchemas.getAllGroupsPopulatedSchema),
  CompositorController.getAllGroupsPopulated
);
