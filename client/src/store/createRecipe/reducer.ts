import { ICreateRecipeState } from '@src/store/createRecipe/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICreateRecipeState = {
	isLoading: false,
	isValid: false,
	form: {
		title: '',
		description: '',
		mainPhoto: null,
		contentBlocks: [],
	},
};

export const createRecipeSlice = createSlice({
	name: 'createRecipe',
	initialState,
	reducers: {
		
	},
});
