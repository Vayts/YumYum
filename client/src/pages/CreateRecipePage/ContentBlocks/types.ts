import { ICreateRecipeContentBlock } from '@src/types/createRecipe.types';
import React from 'react';

export interface IContentBlocksProps {
  contentBlocks: ICreateRecipeContentBlock[],
  setContentBlocks: React.Dispatch<(state: ICreateRecipeContentBlock[]) => ICreateRecipeContentBlock[]>,
}

export interface ICreateContentBlockProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void,
  contentBlock: ICreateRecipeContentBlock,
  index: number,
}

export interface ICreateContentBlockWithPhotoProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void,
  onPhotoSave: (value: File, id: string) => void,
  contentBlock: ICreateRecipeContentBlock,
  index: number,
}
