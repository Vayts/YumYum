import { createAction } from '@reduxjs/toolkit';
import { ICreateRecipeDto } from '@src/types/createRecipe.types';

export const addRecipeRequest = createAction('ADD_RECIPE_REQUEST', (values: any) => ({ payload: { values } }));
