import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";

export const getPopulatedUserSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});

export const getAllUsersPopulatedSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({}),
});

export const getPopulatedGroupSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});

export const getAllGroupsPopulatedSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({}),
});
