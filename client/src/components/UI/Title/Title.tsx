import React from 'react';
import { ITitle } from '@src/components/UI/Title/types';
import { TitleItem } from './style';

export const Title: React.FC<ITitle> = (props) => {
	const { fz, margin, color, children, height, align, fw } = props;
	return (
		<TitleItem fz={fz} margin={margin} color={color} height={height} align={align} fw={fw}>
			{children}
		</TitleItem>
	);
};
