import React from 'react';
import { ITextTooltip } from '@src/components/UI/TextTooltip/types';
import { TextTooltipItem, TextTooltipWrapper } from '@src/components/UI/TextTooltip/style';

export const TextTooltip: React.FC<ITextTooltip> = ({ text, direction, children, width }) => {
	return (
		<TextTooltipWrapper>
			<TextTooltipItem direction={direction} width={width}>
				{text}
			</TextTooltipItem>
			{children}
		</TextTooltipWrapper>
	);
};
