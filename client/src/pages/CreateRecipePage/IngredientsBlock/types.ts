import { IIngredientItem } from '@src/store/createRecipe/types';
import React from 'react';

export interface IIngredientsBlock {
	ingredients: IIngredientItem[],
	setIngredients: React.Dispatch<(state: IIngredientItem[]) => IIngredientItem[]>,
}

export interface IIngredientBlockIconStyle {
	isDisabled: boolean,
}
