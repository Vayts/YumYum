import { Ref } from 'react';

export interface ISearch {
	id: string,
	name: string,
	margin?: string,
	fz?: number,
	height?: string,
	width?: string,
	value: string,
	placeholder?: string,
	onChange: (value) => void,
	refValue?: Ref<HTMLInputElement> | null,
}

export interface ISearchStyle {
	margin?: string,
	fz?: number,
	height?: string,
	width?: string,
}
