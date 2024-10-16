import { Router } from "express";
import { GroupsRouter } from "./groupsCrud/router";

export const appRouter = Router();

appRouter.use("/", GroupsRouter);

appRouter.use("/isAlive", (_req, res) => {
  res.status(200).json("UP!");
});

appRouter.use("*", (_req, res) => {
  res.status(404).json("Invalid route!");
});
