import styled from 'styled-components';
import { opacityAppear } from '@constants/animations';

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.14);
  z-index: 50;
 	animation: ${opacityAppear} 0.2s linear;
	display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalDialog = styled.div`
  position: relative;
	min-width: 320px;
	background-color: ${({ theme }) => theme.componentBg};
	border-radius: 10px;
`;

export const ModalClose = styled.span`
  position: absolute;
	top: 10px;
	right: 10px;
	font-size: 20px;
	z-index: 51;
	
	&:hover {
		cursor: pointer;
		transition: all 0.1s;
	}
`;

export const ModalTitleWrapper = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.greyLight};
`;
