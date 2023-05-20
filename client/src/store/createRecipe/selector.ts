import { RootState } from '@src/store';
import { ICreateRecipeState, IIngredientItem } from '@src/store/createRecipe/types';

export const selectMainInfo = (state: RootState): ICreateRecipeState['form']['main'] => state.createRecipe.form.main;

export const selectIngredients = (state: RootState): IIngredientItem[] => state.createRecipe.form.ingredients;
