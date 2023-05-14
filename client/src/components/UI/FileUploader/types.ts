export interface IFileUploader {
	value: string,
	text?: string,
	isValid?: boolean,
	height?: string,
	width?: string,
	margin?: string,
	onChange: (e) => void,
	name: string,
	fz?: number,
}

export interface IFileUploaderStyle {
	height?: string,
	width?: string,
	isValid?: boolean,
	margin?: string,
	fz?: number,
	value?: string,
	isActive?: boolean,
}
