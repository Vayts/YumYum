import styled, { css } from 'styled-components';
import { scaleAppear } from '@constants/animations';
import { IMenuItemStyle, IMenuStyle } from '@src/components/UI/Menu/types';

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
	color: ${({ theme }) => theme.subTxtColor};
	
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.blackColor};
	}
`;

export const MenuContent = styled.div<IMenuStyle>`
  position: absolute;
	z-index: 10;
	background-color: ${({ theme }) => theme.componentBg};
	box-shadow: ${({ theme }) => theme.modalShadow};
	min-width: 200px;
  border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.greyColor};
	overflow: hidden;
	top: 90%;
  animation: ${scaleAppear} 0.05s linear;
	
	${({ left }) => {
    if (left) {
      return css`
        left: 100%;
			`;
    }
    return css`
      right: 0;
		`;
  }}
`;

export const MenuList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const MenuItem = styled.li<IMenuItemStyle>`
	padding: 10px;
	
	&:hover {
		cursor: pointer;
		transition: all 0.1s;
		background-color: ${({ theme }) => theme.greyLight};
	}
	
	${({ isDanger, theme }) => {
    if (isDanger) {
      return css`
				color: ${theme.dangerColor};
				
				&:hover {
          background-color: ${theme.dangerColor}20;
				}
			`;
    }
  }}
`;
