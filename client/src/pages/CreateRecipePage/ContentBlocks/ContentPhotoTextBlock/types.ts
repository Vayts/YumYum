import { IContentBlock } from '@src/types/contentBlocks.types';

export interface IContentPhotoTextBlockProps {
	contentBlock: IContentBlock,
	onChangeHandler: (name: string, value: string, id: string) => void,
}

export interface IContentPhotoTextBlockStyle {
	photoPosition: 'right' | 'left',
}
