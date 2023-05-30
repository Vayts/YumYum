import { IPhotoContentBlock } from '@src/types/contentBlocks.types';

export interface IContentPhotoBlockProps {
	content: IPhotoContentBlock,
	id: string,
	onChangeHandler: (name: string, value: string, id: string) => void,
}

export interface IContentPhotoTextBlockStyle {
	photoPosition: 'right' | 'left',
}
