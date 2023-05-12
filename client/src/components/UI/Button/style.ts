import styled, { css } from 'styled-components';
import { IButtonStyle } from './types';

export const ButtonItem = styled.button<IButtonStyle>`
  height: ${({ height = 'auto' }) => height};
  margin: ${({ margin = '5px 10px' }) => margin};
  padding: ${({ padding = '7px 20px' }) => padding};
  font-size: ${({ fz = 16 }) => `${fz}px`};
  font-weight: ${({ fw = 400 }) => fw};
  width: ${({ width = 'auto' }) => width};
  display: block;
  border-radius: ${({ br = '2px' }) => br};
	border: 1px solid transparent;
  position: relative;

  &:disabled, &[disabled] {
    background-color: ${({ theme }) => theme.greyLight};
    color: ${({ theme }) => theme.greyColor};
	  border-color: ${({ theme }) => theme.greyColor};

    &:hover {
      cursor: default;
      background-color: ${({ theme }) => theme.greyLight};
      color: ${({ theme }) => theme.greyColor};
      border-color: ${({ theme }) => theme.greyColor};
    }
  }

  &:hover {
    cursor: pointer;
    transition: all 0.2s;
  }

  ${({ styleType }) => {
		if (styleType === 'transparent') {
			return css`
        background-color: transparent;
	      border-color: transparent;
				box-shadow: none;
				
      `;
		}
		return css`
      border: 1px solid ${({ theme }) => theme.primaryColor};
			background-color: ${({ theme }) => theme.primaryColor};
      color: #fff;

      &:hover {
        background-color: ${({ theme }) => theme.primaryHover};
        border: 1px solid ${({ theme }) => theme.primaryHover};
        color: #fff;
      }
    `;
	}}
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
	align-items: center;
`;

export const ButtonIcon = styled.span<IButtonStyle>`
  font-size: ${({ fz = 16 }) => `${fz}px`};
`;

export const ButtonText = styled.p`
	margin: 0 5px;
`;
