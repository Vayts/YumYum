import { IUserInNeighborhood } from '@src/types/user.types';

export interface INeighborhood {
	_id: string,
	title: string,
	description: string,
	type: string,
	creationDate: Date,
	members: IUserInNeighborhood[],
}

export interface INeighborhoodSearchItem extends INeighborhood {
	status: 1 | 2 | 0;
}
