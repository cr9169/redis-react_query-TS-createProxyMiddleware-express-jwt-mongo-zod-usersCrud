import mongoose from "mongoose";
import config from "./config";
import { Server } from "./server";

const { service } = config;

const main = async () => {
  const server = new Server(service.port);

  await server.start();

  console.log(`Server started on port: ${service.port}`);
};

main().catch((error) => {
  console.error("An error occurred during startup.", {
    error: error.stack || error,
  });
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
});
