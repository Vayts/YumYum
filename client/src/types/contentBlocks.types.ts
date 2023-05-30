export interface IContentFiller {
	type: string,
	content: IPhotoContentBlock | IPhotoTextContentBlock | ITextContentBlock,
}

export interface IContentBlock {
	id: string,
	type: string,
	content: IPhotoContentBlock | IPhotoTextContentBlock | ITextContentBlock,
}

export interface IPhotoContentBlock {
	photo: Blob | MediaSource | null,
	photoDescription: string,
}

export interface IPhotoTextContentBlock {
	photo: Blob | MediaSource | null,
	photoPosition: 'right' | 'left'
	photoDescription: string,
	title: string,
	description: string,
}

export interface ITextContentBlock {
	title: string,
	description: string,
}
