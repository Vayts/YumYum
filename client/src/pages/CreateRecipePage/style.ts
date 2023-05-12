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
