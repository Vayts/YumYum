import React from 'react';
import { ICreateRecipeContentBlock } from '@src/types/createRecipe.types';

export interface IContentBlockMenu {
	id: string,
	type: string,
	setContentBlocks: React.Dispatch<(state: ICreateRecipeContentBlock[]) => ICreateRecipeContentBlock[]>,
}
