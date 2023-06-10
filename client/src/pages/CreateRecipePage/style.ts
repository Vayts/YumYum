import styled from 'styled-components';
import { memo } from 'react';

export const CreateRecipeTitle = memo(styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.greyColor};
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`);

export const CreateRecipeBlock = styled.div`
	margin: 20px 0;
	box-shadow: ${({ theme }) => theme.softShadow};
	background-color: ${({ theme }) => theme.componentBg};
	padding: 20px 20px 40px;
`;
