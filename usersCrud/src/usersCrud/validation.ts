import { z } from "zod";
import { zodMongoObjectId } from "../utils/zod";

const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["admin", "dev", "user"]),
  groupId: zodMongoObjectId.optional(),
});

export const createUserSchema = z.object({
  body: UserSchema,
  query: z.object({}),
  params: z.object({}),
});

export const deleteUserSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});

export const getUserSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});

export const getAllUsersSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({}),
});

export const updateUserSchema = z.object({
  body: UserSchema.partial(),
  query: z.object({}),
  params: z.object({
    id: zodMongoObjectId,
  }),
});
