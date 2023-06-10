import { ICreateRecipeMain } from '@src/types/createRecipe.types';
import React, { SetStateAction } from 'react';

export interface IMainInfoBlockProps {
  mainInfo: ICreateRecipeMain,
  setMainInfo: React.Dispatch<SetStateAction<ICreateRecipeMain>>,
}
