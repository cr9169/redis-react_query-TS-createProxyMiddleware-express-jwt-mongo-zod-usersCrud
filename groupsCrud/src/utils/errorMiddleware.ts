import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

interface HttpError extends Error {
  statusCode?: number;
}

const ErrorMiddleware = (
  err: HttpError | ZodError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle Zod validation errors
  if (err instanceof ZodError) {
    const status = 400;
    const errors = err.errors.map((error) => ({
      message: error.message,
      path: error.path.join("."),
      type: error.code,
    }));

    console.log("Validation Error:", {
      status,
      errors,
      method: req.method,
      url: req.url,
      ip: req.ip,
    });

    return res.status(status).json({
      status,
      errors,
    });
  }

  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.log("HTTP Error:", {
    status,
    message,
    stack: err.stack,
    method: req.method,
    url: req.url,
    ip: req.ip,
  });

  res.status(status).json({
    status,
    message,
  });
};

export default ErrorMiddleware;
