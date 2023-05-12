export interface IRegisterState {
	data: {
		firstName: string,
		lastName: string,
		login: string,
		password: string,
		confirmPassword: string,
	}
	errors: Record<string, string>,
	touched: Record<string, boolean>,
	isLoading: boolean,
	
}
