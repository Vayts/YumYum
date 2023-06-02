import React, { SetStateAction } from 'react';
import { IContentBlock } from '@src/types/contentBlocks.types';

export interface IContentBlockMenu {
	id: string,
	type: string,
	setContentBlocks: React.Dispatch<SetStateAction<IContentBlock[]>>,
}
