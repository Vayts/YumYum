import { IUser } from '@src/types/user.types';

export interface IUserState {
  data: IUser;
  isTokenRefreshing: boolean;
}
