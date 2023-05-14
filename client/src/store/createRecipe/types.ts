export interface ICreateRecipeState {
	isValid: boolean,
	isLoading: boolean,
	form: {
		mainInfo: {
			title: string,
			description: string,
			mainPhoto: string,
		}
		contentBlocks: ICreateRecipeContentBlock[],
	}
}

export interface ICreateRecipeContentBlock {
	isValid: boolean,
	title: string,
	text: string,
	type: string,
	content?: File,
}
