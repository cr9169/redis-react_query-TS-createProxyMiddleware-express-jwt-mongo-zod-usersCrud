export default interface IGroup {
  id: string;
  name: string;
  description?: string;
  users: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}
