import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoginPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWindow = styled.div`
  background-color: ${({ theme }) => theme.componentBg};
  padding: 30px 40px;
	width: 450px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
`;

export const LoginLogoWrapper = styled.div`
	text-align: center;
	
	img {
		width: 45px;
		margin: 0 auto;
	}
	
`;

export const LoginPageLinkWrapper = styled.div`
	display: flex;
  justify-content: center;
`;

export const LoginPageLinkTitle = styled.p`
	margin: 0 5px 0 0;
	color: ${({ theme }) => theme.subTxtColor};
	font-size: 14px;
`;

export const LoginPageLink = styled(NavLink)`
	text-decoration: none;
	font-size: 14px;
	
	&:hover {
    color: ${({ theme }) => theme.linkHover}
  }
`;
