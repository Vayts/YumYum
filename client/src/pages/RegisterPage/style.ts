import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RegisterPageWrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RegisterWindow = styled.div`
  background-color: ${({ theme }) => theme.componentBg};
  padding: 30px 40px;
  width: 450px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
`;

export const RegisterLogoWrapper = styled.div`
	text-align: center;
	
	img {
		width: 45px;
		margin: 0 auto;
	}
	
`;

export const RegisterFormUpWrapper = styled.div`
  display: flex;
	width: 100%;
  justify-content: space-between;
`;

export const RegisterFormInputWrapper = styled.div`
	width: 48%;
`;

export const RegisterPageLinkWrapper = styled.div`
	display: flex;
  justify-content: center;
`;

export const RegisterPageLinkTitle = styled.p`
	margin: 0 5px 0 0;
	font-size: 14px;
`;

export const RegisterPageLink = styled(NavLink)`
	text-decoration: none;
	font-size: 14px;
`;
