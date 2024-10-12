import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";

export const GroupSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  users: z.array(zodMongoObjectId),
});

export const createGroupSchema = z.object({
  body: GroupSchema,
  query: z.object({}),
  params: z.object({}),
});

export const deleteGroupSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});

export const getGroupSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});

export const getAllGroupsSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({}),
});

export const updateGroupSchema = z.object({
  body: GroupSchema.partial(),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});
