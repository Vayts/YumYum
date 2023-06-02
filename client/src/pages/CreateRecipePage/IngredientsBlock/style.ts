import styled, { css } from 'styled-components';
import { IIngredientBlockIconStyle } from '@src/pages/CreateRecipePage/IngredientsBlock/types';

export const IngredientsInputWrapper = styled.div`
	display: flex;
	align-items: center;
	
	&:nth-child(2) {
		flex-grow: 1;
	}
`;

export const IngredientsIconsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  margin-right: 10px;
`;

export const IngredientsOrderIcon = styled.span<IIngredientBlockIconStyle>`
  font-size: 20px;
	
	${({ isDisabled, theme }) => {
    if (!isDisabled) {
      return css`
        &:hover {
          transition: all 0.1s;
          color: ${theme.primaryColor};
          cursor: pointer;
        }
			`;
    }
    return css`
			color: ${theme.greyColor};
		`;
  }}
	
  
`;

export const IngredientsInputElemWrapper = styled.div`
	flex-grow: 1;
`;

export const IngredientsIcon = styled.span<IIngredientBlockIconStyle>`
	margin-left: 15px;
	font-size: 25px;
	color: ${({ theme }) => theme.subTxtColor};

  ${({ isDisabled, theme }) => {
    if (!isDisabled) {
      return css`
        &:hover {
          transition: all 0.1s;
          cursor: pointer;
          color: ${theme.dangerColor};
        }
			`;
    }
    return css`
			color: ${theme.greyColor};
		`;
  }}
`;
