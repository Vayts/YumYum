import styled from 'styled-components';
import { ISearchStyle } from '@src/components/UI/Search/types';

export const SearchWrapper = styled.label<ISearchStyle>`
  margin: ${({ margin = '5px 0' }) => margin};
  width: ${({ width = 'auto' }) => width};
  font-size: ${({ fz = 16 }) => `${fz}px`};
  height: ${({ height = 'auto' }) => height};
  position: relative;
	display: inline-block;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 10px 10px 40px;
  border-radius: 10px;
  border: 1px solid #ECECED;
  background-color: #f3f3f3;
	outline: none;
	
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}

`;

export const SearchIcon = styled.span`
  position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 20px;
	color: #4F4B5C;
`;
