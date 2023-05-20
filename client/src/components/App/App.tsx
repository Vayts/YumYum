import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { THEMES } from '@constants/themes';
import { LoginPage } from '@src/pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '@src/pages/RegisterPage/RegisterPage';
import RequireAuth from '@hoc/RequireAuth/RequireAuth';
import { useAppSelector } from '@src/hooks/hooks';
import { Layout } from '@hoc/Layout/Layout';
import { Modal } from '@src/components/Modal/Modal';
import { selectModalType } from '@src/store/modal/selectors';
import { CreateRecipePage } from '@src/pages/CreateRecipePage/CreateRecipePage';
import { AppWrapper } from './style';

export const App: React.FC = () => {
	const isModalActive = useAppSelector(selectModalType);
	
	return (
		<ThemeProvider theme={THEMES.light}>
			<AppWrapper>
				<Routes>
					<Route path="/login" element={<LoginPage/>}/>
					<Route path="/register" element={<RegisterPage/>}/>
					<Route path='/' element={<Layout/>}>
						<Route path='/' element={<CreateRecipePage/>}/>
						<Route path='/' element={<RequireAuth/>} />
					</Route>
				</Routes>
				<ToastContainer
					position="top-center"
					limit={1}
					autoClose={3000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable={false}
					theme="colored"
				/>
				{isModalActive && <Modal/>}
			</AppWrapper>
		</ThemeProvider>
	);
};
