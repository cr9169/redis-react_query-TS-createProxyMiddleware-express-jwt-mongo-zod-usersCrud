import { Router } from "express";
import { CompositorRouter } from "./compositor/router";
import { createProxyMiddleware } from "http-proxy-middleware";
import config from "./config";

export const appRouter = Router();

appRouter.use(
  "/users",
  createProxyMiddleware({
    target: config.usersService.connectionString,
    changeOrigin: true,
  })
);

appRouter.use(
  "/groups",
  createProxyMiddleware({
    target: config.groupsService.connectionString,
    changeOrigin: true,
  })
);

appRouter.use("/compositor", CompositorRouter);

appRouter.use("/isAlive", (_req, res) => {
  res.status(200).json("UP!");
});

appRouter.use("*", (_req, res) => {
  res.status(404).json("Invalid route!");
});
