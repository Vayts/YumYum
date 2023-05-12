import { Ref } from 'react';

export interface IInput {
	id: string,
	name: string,
	margin?: string,
	padding?: string,
	fz?: number,
	height?: string,
	width?: string,
	value: string,
	type?: 'text' | 'number' | 'password',
	isSecure?: boolean,
	label?: string,
	placeholder?: string,
	onChange: (value) => void,
	isValid?: boolean,
	refValue?: Ref<HTMLInputElement> | null,
}

export interface IInputStyle {
	margin?: string,
	padding?: string,
	fz?: number,
	height?: string,
	width?: string,
	isValid?: boolean,
}
