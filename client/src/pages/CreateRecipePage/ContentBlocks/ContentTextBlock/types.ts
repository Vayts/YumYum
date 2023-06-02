import { IContentBlock } from '@src/types/contentBlocks.types';

export interface IContentTextBlockProps {
	contentBlock: IContentBlock,
	onChangeHandler: (name: string, value: string, id: string) => void,
}
