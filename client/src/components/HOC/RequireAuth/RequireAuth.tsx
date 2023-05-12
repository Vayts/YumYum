import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@src/hooks/hooks';
import { selectUser } from '@src/store/user/selectors';

const RequireAuth: React.FC = () => {
	const user = useAppSelector(selectUser);
	const navigate = useNavigate();
	
	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user]);
	
	return (
		user ? <Outlet/> : null
	);
};

export default RequireAuth;
