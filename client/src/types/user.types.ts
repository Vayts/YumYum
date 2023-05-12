export interface IUser {
	_id: string,
	firstName: string,
	lastName: string,
	login: string,
	avatar: string | null,
	token: string,
}

export interface IUserInNeighborhood {
	_id: string,
	firstName: string,
	lastName: string,
	avatar: string,
	login: string,
}
