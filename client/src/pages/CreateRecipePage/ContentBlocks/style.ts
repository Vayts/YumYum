import styled from 'styled-components';

export const ContentBlocksList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const ContentBlockItem = styled.li`
  margin-top: 25px;
  box-shadow: ${({ theme }) => theme.softShadow};
  background-color: ${({ theme }) => theme.componentBg};
  padding: 20px 20px 40px;
  position: relative;
`;

export const ContentBlockControlsWrapper = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export const ContentBlockRadioWrapper = styled.div`

`;

export const ContentMenuWrapper = styled.div`
  position: absolute;
	top: 15px;
	right: 10px;
`;

export const ContentBlockRadioLabel = styled.label`
	display: block;
  padding: 10px;
	border: 1px solid ${({ theme }) => theme.greyColor};
	border-radius: 3px;
	margin-right: 10px;
	
	&:hover {
		cursor: pointer;
		transition: all 0.1s;
		background-color: ${({ theme }) => theme.greyLight};
	}
`;

export const ContentBlockRadio = styled.input.attrs({ type: 'radio' })`
	display: none;
	
	&:checked ~ label {
		background-color: ${({ theme }) => theme.primaryColor};
		border-color: ${({ theme }) => theme.primaryColor};
		color: #fff;
		
		&:hover {
			cursor: default;
		}
	}
`;
