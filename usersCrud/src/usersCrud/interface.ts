export default interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  groupId?: string;
  createdAt: Date;
  updatedAt: Date;
}

type Role = "admin" | "dev" | "user";
