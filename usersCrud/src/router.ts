import { Router } from "express";
import { UsersRouter } from "./usersCrud/router";

export const appRouter = Router();

appRouter.use("/", UsersRouter);

appRouter.use("/isAlive", (_req, res) => {
  res.status(200).json("UP!");
});

appRouter.use("*", (_req, res) => {
  res.status(404).json("Invalid route");
});
