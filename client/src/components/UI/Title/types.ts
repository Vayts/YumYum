import React from 'react';

export interface ITitle {
	fz?: number,
	margin?: string,
	color?: string,
	height?: string,
	align?: 'center' | 'right' | 'left',
	fw?: number,
    children: React.ReactNode;
}
