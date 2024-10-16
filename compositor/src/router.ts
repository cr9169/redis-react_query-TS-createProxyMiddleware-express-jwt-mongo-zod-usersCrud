import { Router } from "express";
import { CompositorRouter } from "./compositor/router";

export const appRouter = Router();

appRouter.use("/", CompositorRouter);

appRouter.use("/isAlive", (_req, res) => {
  res.status(200).json("UP!");
});

appRouter.use("*", (_req, res) => {
  res.status(404).json("Invalid route!");
});
