import mongoose from "mongoose";
import config from "./config";
import { Server } from "./server";

const { mongo, service } = config;

const initializeMongo = async () => {
  console.log("Connecting to Mongo...");

  await mongoose.connect(mongo.uri);

  console.log("Mongo connection established");
};

const main = async () => {
  await initializeMongo();

  const server = new Server(service.port);

  await server.start();

  console.error(`Server started on port: ${service.port}`);
};

main().catch((error) => {
  console.error("An error occurred during startup.", {
    error: error.stack || error,
  });
});

process.on("uncaughtException", (error) => {
  console.error(`Uncaught Exception - Error: ${error}`);
});

process.on("unhandledRejection", (error) => {
  console.error(`Unhandled Rejection: - Error: ${error}`);
});
