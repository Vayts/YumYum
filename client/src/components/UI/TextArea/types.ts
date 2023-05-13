import { Ref } from 'react';

export interface ITextArea {
	id: string,
	name: string,
	margin?: string,
	padding?: string,
	fz?: number,
	height?: string,
	width?: string,
	value: string,
	label?: string,
	placeholder?: string,
	onChange: (value) => void,
	isValid?: boolean,
	refValue?: Ref<HTMLInputElement> | null,
}

export interface ITextAreaStyle {
	margin?: string,
	padding?: string,
	fz?: number,
	height?: string,
	width?: string,
	isValid?: boolean,
}
