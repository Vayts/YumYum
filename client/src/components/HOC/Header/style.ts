import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
	//border-bottom: 1px solid ${({ theme }) => theme.greyColor};
	box-shadow: ${({ theme }) => theme.softShadow};
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  padding: 10px 15px;
  margin: 0 auto;
	display: flex;
	align-items: center;
`;

export const HeaderLogo = styled.div`
	margin-right: 60px;
	
	img {
		width: 60px;
		height: 60px;
	}
`;

export const HeaderNav = styled.nav`
	flex-grow: 1;
`;

export const HeaderNavList = styled.ul`
  display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const HeaderNavItem = styled.li`
	margin-right: 25px;
	color: ${({ theme }) => theme.blackColor};
	font-weight: 500;
`;

export const HeaderNavLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
	font-size: 16px;
	
	&:hover {
		color: ${({ theme }) => theme.primaryColor};
	}
`;

export const HeaderControls = styled.div``;

export const HeaderSearch = styled.span`
	font-size: 25px;
`;
