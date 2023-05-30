import React, { SetStateAction } from 'react';
import { IContentBlock } from '@src/types/contentBlocks.types';

export interface IContentBlockModal {
	contentBlocks: IContentBlock[],
	setModalOpen: React.Dispatch<SetStateAction<boolean>>,
	setContentBlocks: React.Dispatch<SetStateAction<IContentBlock[]>>,
}
