export interface ICreateRecipeState {
	isValid: boolean,
	isLoading: boolean,
	form: {
		main: {
			title: string,
			description: string,
		},
		ingredients: IIngredientItem[],
		contentBlocks: {
		
		},
	}
}

export interface IIngredientItem {
	id: string,
	value: string,
  errors: Record<string, string>,
  touched: boolean,
}

export interface ICreateRecipeContentBlock {
	isValid: boolean,
	title: string,
	text: string,
	type: string,
	content?: File,
}
