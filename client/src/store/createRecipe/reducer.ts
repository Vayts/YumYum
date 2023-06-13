import { createSlice } from '@reduxjs/toolkit';
import { ICreateRecipeState } from '@src/store/createRecipe/types';

const initialState: ICreateRecipeState = {
  isLoading: false,
};

export const createRecipeSlice = createSlice({
  name: 'createRecipe',
  initialState,
  reducers: {
    addRecipeRequestState: (state) => {
      state.isLoading = true;
    },
    addRecipeRequestSuccess: (state) => {
      state.isLoading = false;
    },
    addRecipeRequestError: (state) => {
      state.isLoading = true;
    },
  },
});
