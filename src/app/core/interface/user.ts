export interface IUser {
  name: string;
  username: string;
  email: string;
  dateOfBirth?: Date | null;
  password?: string;
}
