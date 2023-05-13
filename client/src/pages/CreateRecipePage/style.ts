import styled from 'styled-components';

export const CreateRecipeWrapper = styled.div`
	margin-top: 15px;
`;

export const CreateRecipeTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.greyColor};
	padding: 15px 0;
  display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CreateRecipeBlock = styled.div`
	margin-top: 25px;
`;

export const CreateRecipeMainInfo = styled.div`
	display: flex;
`;

export const CreateRecipeImg = styled.div`
  width: 450px;
  height: 281px;
  border: 1px solid #E2E8F0;
`;

export const CreateRecipeImgWrapper = styled.div`
  margin-right: 20px;
`;

export const CreateRecipeMainInputs = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	
	div:last-child {
		flex-grow: 1;
	}
`;
