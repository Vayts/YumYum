import React from 'react';
import { LayoutWrapper } from '@hoc/Layout/style';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
	
	return (
		<LayoutWrapper>
			<Outlet/>
		</LayoutWrapper>
	);
};
