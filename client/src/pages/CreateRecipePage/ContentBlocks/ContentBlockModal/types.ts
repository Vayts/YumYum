import React, { SetStateAction } from 'react';
import { ICreateRecipeContentBlock } from '@src/types/createRecipe.types';

export interface IContentBlockModals {
  setModalOpen: React.Dispatch<SetStateAction<boolean>>,
  setContentBlocks: React.Dispatch<(state: ICreateRecipeContentBlock[]) => ICreateRecipeContentBlock[]>,
}
