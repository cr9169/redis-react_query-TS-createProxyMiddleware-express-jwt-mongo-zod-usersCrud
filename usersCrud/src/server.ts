import { once } from "events";
import express, { RequestHandler, ErrorRequestHandler } from "express";
import helmet from "helmet";
import http from "http";
import ErrorMiddleware from "./utils/errorMiddleware";
import { appRouter } from "./router";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";

export class Server {
  private app: express.Application;
  private http!: http.Server;

  /* istanbul ignore next */
  constructor(private port: number) {
    this.app = Server.createExpressApp();
  }

  static createExpressApp() {
    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(mongoSanitize());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(appRouter);

    app.use(ErrorMiddleware as ErrorRequestHandler);

    return app;
  }

  /* istanbul ignore next */
  async start() {
    this.http = this.app.listen(this.port);
    await once(this.http, "listening");
  }
}
