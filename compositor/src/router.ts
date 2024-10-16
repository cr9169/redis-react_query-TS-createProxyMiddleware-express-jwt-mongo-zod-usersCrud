import { Router } from "express";
import { CompositorRouter } from "./compositor/router";
import { createProxyMiddleware } from "http-proxy-middleware";

export const appRouter = Router();

appRouter.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
  })
);

appRouter.use(
  "/groups",
  createProxyMiddleware({ target: "http://localhost:5000", changeOrigin: true })
);

appRouter.use("/compositor", CompositorRouter);

appRouter.use("/isAlive", (_req, res) => {
  res.status(200).json("UP!");
});

appRouter.use("*", (_req, res) => {
  res.status(404).json("Invalid route!");
});
