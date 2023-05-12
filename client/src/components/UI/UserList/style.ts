import styled from 'styled-components';
import { IUserListStyle } from '@src/components/UI/UserList/types';

export const UserListWrapper = styled.ul<IUserListStyle>`
	display: flex;
  list-style: none;
	padding: 0;
	margin: ${({ margin = '5px 0 5px 5px' }) => margin};
	cursor: pointer;
`;

export const UserListItem = styled.li<IUserListStyle>`
	width: ${({ size = 35 }) => `${size}px`};
  height: ${({ size = 35 }) => `${size}px`};
	background-color: ${({ theme }) => theme.primary};
	border-radius: ${({ size = 35 }) => `${size / 2.5}px`};
	display: flex;
  justify-content: center;
	align-items: center;
	text-transform: uppercase;
	color: #fff;
	border: 2px solid #fff;
	margin-left: -10px;
	user-select: none;
	
	&:nth-child(1) {
		margin-left: 0;
	}
	
	&:nth-child(2) {
		background-color: ${({ theme }) => theme.secondColor};
	}
`;

export const UserListItemFiller = styled.li<IUserListStyle>`
  width: ${({ size = 35 }) => `${size}px`};
  height: ${({ size = 35 }) => `${size}px`};
  background-color: ${({ theme }) => theme.thirdColor};
  border-radius: ${({ size = 35 }) => `${size / 2.5}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  border: 3px solid #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.07);
  margin-left: -10px;
	user-select: none;
`;
