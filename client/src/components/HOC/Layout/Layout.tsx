import React from 'react';
import { LayoutMainContent, LayoutWrapper } from '@hoc/Layout/style';
import { Outlet } from 'react-router-dom';
import { Header } from '@hoc/Header/Header';

export const Layout: React.FC = () => {
	return (
		<LayoutWrapper>
			<Header/>
			<LayoutMainContent>
				<Outlet/>
			</LayoutMainContent>
		</LayoutWrapper>
	);
};
