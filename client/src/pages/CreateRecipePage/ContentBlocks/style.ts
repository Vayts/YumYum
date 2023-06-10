import styled from 'styled-components';

export const ContentBlocksWrapper = styled.div``;

export const ContentBlocksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  li {
    position: relative;
  }
`;

export const ContentBlockControlsWrapper = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export const ContentBlockItem = styled.div`
  margin: 20px 0;
  box-shadow: ${({ theme }) => theme.softShadow};
  background-color: ${({ theme }) => theme.componentBg};
  padding: 20px 20px 40px;
`;

export const ContentBlockRadioLabel = styled.label`
  display: block;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.greyColor};
  border-radius: 3px;
  margin-right: 10px;
  user-select: none;

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

export const ContentBlockMenuWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;
