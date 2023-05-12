import React from 'react';
import { AvatarFillerWrapper } from '@src/components/UI/AvatarFiller/style';
import { IAvatarFiller } from '@src/components/UI/AvatarFiller/types';

export const AvatarFiller: React.FC<IAvatarFiller> = ({ margin, text, size }) => {
	return (
		<AvatarFillerWrapper margin={margin} size={size}>
			{text.slice(0, 1)}
		</AvatarFillerWrapper>
	);
};
