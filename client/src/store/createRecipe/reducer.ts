import { ICreateRecipeState } from '@src/store/createRecipe/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICreateRecipeState = {
	isLoading: false,
	isValid: false,
	form: {
		mainInfo: {
			title: '',
			description: '',
			mainPhoto: null,
		},
		contentBlocks: [],
	},
};

export const createRecipeSlice = createSlice({
	name: 'createRecipe',
	initialState,
	reducers: {
		setMainInfo: (state, action: PayloadAction<{name: string, value: any}>) => {
			state.form.mainInfo[action.payload.name] = action.payload.value;
		},
	},
});

export const { setMainInfo } = createRecipeSlice.actions;
