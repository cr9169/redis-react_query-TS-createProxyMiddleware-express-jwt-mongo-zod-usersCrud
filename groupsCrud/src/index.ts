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

/*

What it handles: Synchronous errors that are not caught by any try/catch block.

When it occurs: If an exception (error) occurs in your code, and there is no
error-handling mechanism to catch it (e.g., in a try/catch block),
it will trigger the uncaughtException event.

*/
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

/*
  
  What it handles: Asynchronous errors (i.e., rejected promises) that are not caught by a .catch() method.
  
  When it occurs: If a promise is rejected and you do not provide a .catch() to handle the rejection, the unhandledRejection event is triggered.
  
  */
process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
});
