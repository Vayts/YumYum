import styled, { css } from 'styled-components';
import { scaleAppear } from '@constants/animations';
import { IMenuStyle } from '@src/components/UI/Menu/types';

export const MenuWrapper = styled.div`
  position: relative;
	width: 25px;
	height: 25px;
  display: flex;
  justify-content: center;
	align-items: center;
`;

export const MenuIcon = styled.span<IMenuStyle>`
	user-select: none;
	display: block;
	padding: 5px;
	border-radius: 30%;
	transition: all 0.2s;
	background-color: ${({ isOpen, theme }) => (isOpen ? theme.greyLight : 'transparent')};
	transform: rotate(${({ vertical }) => (vertical ? '90deg' : '0')});
`;

export const MenuContent = styled.div<IMenuStyle>`
  position: absolute;
	z-index: 10;
	background-color: ${({ theme }) => theme.componentBg};
	box-shadow: ${({ theme }) => theme.modalShadow};
	min-width: 200px;
	top: 50%;
  animation: ${scaleAppear} 0.05s linear;
	
	${({ left }) => {
		if (left) {
			return css`
        left: 100%;
			`;
		}
		return css`
      right: 100%;
		`;
	}}
`;
