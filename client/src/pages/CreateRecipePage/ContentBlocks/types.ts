import { IContentBlock } from '@src/types/contentBlocks.types';
import React, { SetStateAction } from 'react';

export interface IContentBlocks {
	contentBlocks: IContentBlock[],
	setContentBlocks: React.Dispatch<SetStateAction<IContentBlock[]>>,
}
