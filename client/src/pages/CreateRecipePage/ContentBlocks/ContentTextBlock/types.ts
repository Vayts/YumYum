import { ITextContentBlock } from '@src/types/contentBlocks.types';

export interface IContentTextBlockProps {
	content: ITextContentBlock,
	id: string,
	onChangeHandler: (name: string, value: string, id: string) => void,
}
