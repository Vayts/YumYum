import { IPhotoTextContentBlock } from '@src/types/contentBlocks.types';

export interface IContentPhotoTextBlockProps {
	content: IPhotoTextContentBlock,
	id: string,
	onChangeHandler: (name: string, value: string, id: string) => void,
}

export interface IContentPhotoTextBlockStyle {
	photoPosition: 'right' | 'left',
}
