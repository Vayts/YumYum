import { RootState } from '@src/store';

export const selectCreateRecipeMainPhoto = (state: RootState): string => state.createRecipe.form.mainInfo.mainPhoto;
