import styled from 'styled-components';
import { IAvatarFillerStyle } from '@src/components/UI/AvatarFiller/types';

export const AvatarFillerWrapper = styled.div<IAvatarFillerStyle>`
  width: ${({ size = 35 }) => `${size}px`};
  height: ${({ size = 35 }) => `${size}px`};
	background-color: ${({ theme }) => theme.primary};
	margin: ${({ margin = '5px 0' }) => margin};
	font-size: ${({ size = 35 }) => `${size / 2}px`};;
	text-transform: uppercase;
	display: flex;
  justify-content: center;
	align-items: center;
	color: #fff;
	border-radius: 50%;
`;
