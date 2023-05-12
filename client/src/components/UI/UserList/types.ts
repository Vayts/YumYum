import { IUserInNeighborhood } from '@src/types/user.types';

export interface IUserList {
	users: IUserInNeighborhood[],
	size?: number,
	margin?: string,
	clickable?: boolean,
}

export interface IUserListStyle {
	size?: number,
	margin?: string,
}
