export interface IUser {
  id?: number;
  name: string;
  username: string;
  email: string;
  dateOfBirth?: Date | null;
  password?: string;
}
