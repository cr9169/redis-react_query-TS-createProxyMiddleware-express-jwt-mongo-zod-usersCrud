import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

/* 
This helper function takes an asynchronous function (func) as input, 
which performs some asynchronous logic (such as validating request data).
It returns a middleware function for Express that calls the asynchronous
logic and either calls next() (to proceed to the next middleware)
or next(error) (to handle any error).
*/
export const wrapMiddleware = (
  func: (req: Request, res?: Response) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    func(req, res).then(next).catch(next);
  };
};

/*
This function takes a Zod schema (of type AnyZodObject) as an argument and validates
the incoming request data (body, query, and params) against the schema.
It uses the wrapMiddleware function to execute the async validation. Specifically, it:
Extracts the request data (body, query, and params) from the req object.
Uses Zod's parseAsync method to asynchronously validate the data.
If the data passes validation, it updates req.body, req.query, and req.params with the
validated data (which may be transformed during validation).
If validation fails, it throws an error, which gets passed to the error-handling middleware in Express.
*/
export const validateRequest = (schema: AnyZodObject) => {
  return wrapMiddleware(async (req: Request) => {
    const { body, query, params } = req;
    const {
      body: parsedBody,
      query: parsedQuery,
      params: parsedParams,
    } = await schema.parseAsync({ body, query, params });

    req.body = parsedBody;
    req.query = parsedQuery;
    req.params = parsedParams;
  });
};
