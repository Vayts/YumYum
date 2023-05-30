import styled from 'styled-components';
import { leftAppear, opacityAppear } from '@constants/animations';

export const ContentBlockModalWrapper = styled.div`
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

export const ContentBlockModalDialog = styled.div`
  background-color: ${({ theme }) => theme.componentBg};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 400px;
	animation: ${leftAppear} 0.1s linear;
`;

export const ContentBlockButtons = styled.div`
	display: flex;
`;

export const ContentBlockModalList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const ContentBlockModalItem = styled.li`

`;

export const ContentBlockModalRadioLabel = styled.label`
  padding: 15px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.greyLight};
  font-weight: 500;
	display: block;
	transition: all 0.1s;

  &:hover {
	  cursor: pointer;
    background-color: ${({ theme }) => theme.greyLight};
  }
`;

export const ContentBlockModalRadio = styled.input.attrs({ type: 'radio', name: 'contentBlockModalType' })`
	display: none;
	
	&:checked + label {
    padding-left: 20px;
    background-color: ${({ theme }) => theme.greyColor};
	}
`;
