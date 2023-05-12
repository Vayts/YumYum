import styled from 'styled-components';
import { ITextTooltipStyle } from '@src/components/UI/TextTooltip/types';

export const TextTooltipWrapper = styled.div<ITextTooltipStyle>`
  position: relative;
	&:hover {
		& > div {
			display: block;
		}
 	}
`;

export const TextTooltipItem = styled.div<ITextTooltipStyle>`
  width: ${({ width = '150px' }) => width};
	display: none;
	background-color: ${({ theme }) => theme.tooltipColor};
	color: ${({ theme }) => theme.txtReverseColor};
	padding: 5px 10px;
  position: absolute;
	right: 110%;
	top: 50%;
	transform: translateY(-50%);
  z-index: 20;
	font-size: 14px;
	border-radius: 5px;
`;
