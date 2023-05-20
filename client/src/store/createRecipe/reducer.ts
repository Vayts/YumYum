import { ICreateRecipeState } from '@src/store/createRecipe/types';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState: ICreateRecipeState = {
	isLoading: false,
	isValid: false,
	form: {
		main: {
			title: '',
			description: '',
		},
		ingredients: [{
			id: 'ingredient0',
			value: '',
		}],
		contentBlocks: [],
	},
};

export const createRecipeSlice = createSlice({
	name: 'createRecipe',
	initialState,
	reducers: {
		setMainInfo: (state, action) => {
			state.form.main[action.payload.name] = action.payload.value;
		},
		addIngredient: (state) => {
			state.form.ingredients.push({
				id: uuidv4(),
				value: '',
			});
		},
		setIngredients: (state, action) => {
			state.form.ingredients = action.payload;
		},
	},
});

export const { setMainInfo, addIngredient, setIngredients } = createRecipeSlice.actions;
