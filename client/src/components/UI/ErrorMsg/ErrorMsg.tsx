import React from 'react';
import { IErrorMsg } from '@src/components/UI/ErrorMsg/types';
import { ErrorMsgText, ErrorMsgWrapper } from '@src/components/UI/ErrorMsg/style';

export const ErrorMsg: React.FC<IErrorMsg> = ({ show, margin, children }) => {
	return (
		<ErrorMsgWrapper margin={margin} data-testid='errorMsg'>
			{show && <ErrorMsgText>{children}</ErrorMsgText>}
		</ErrorMsgWrapper>
	);
};
