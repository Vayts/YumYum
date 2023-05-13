export interface ICreateRecipeState {
	isValid: boolean,
	isLoading: boolean,
	form: {
		title: string,
		description: string,
		mainPhoto: null | File,
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
