import { ICreateRecipeIngredient } from '@src/types/createRecipe.types';
import React from 'react';

export interface IIngredientsBlockProps {
  ingredients: ICreateRecipeIngredient[],
  setIngredients: React.Dispatch<(state: ICreateRecipeIngredient[]) => ICreateRecipeIngredient[]>,
}
