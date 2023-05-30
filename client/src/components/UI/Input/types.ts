import React, { Ref } from 'react';
import { DefaultTFuncReturn } from 'i18next';

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
	label?: string | DefaultTFuncReturn,
	placeholder?: string | DefaultTFuncReturn,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	isValid?: boolean,
	refValue?: Ref<HTMLInputElement> | null,
	max?: number,
	min?: number,
}

export interface IInputStyle {
	margin?: string,
	padding?: string,
	fz?: number,
	height?: string,
	width?: string,
	isValid?: boolean,
}
