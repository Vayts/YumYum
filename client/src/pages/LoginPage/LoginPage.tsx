import React, { useEffect } from 'react';
import {
	LoginLogoWrapper,
	LoginPageLink,
	LoginPageLinkTitle,
	LoginPageLinkWrapper,
	LoginPageWrapper,
	LoginWindow,
} from '@src/pages/LoginPage/style';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { Input } from '@src/components/UI/Input/Input';
import { useAppDispatch, useAppSelector } from '@src/hooks/hooks';
import { selectLoginData, selectLoginLoading } from '@src/store/login/selector';
import { resetLogin, setLoginData } from '@src/store/login/reducer';
import { Button } from '@src/components/UI/Button/Button';
import { ErrorMsg } from '@src/components/UI/ErrorMsg/ErrorMsg';
import { Description } from '@src/components/UI/Description/Description';
import { STATIC_URL } from '@constants/base';
import { loginRequest } from '@src/store/login/actions';
import { selectUser } from '@src/store/user/selectors';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
	const user = useAppSelector(selectUser);
	const values = useAppSelector(selectLoginData);
	const isLoading = useAppSelector(selectLoginLoading);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	
	useEffect(() => {
		if (user) {
			navigate('/');
		}
		
		return () => {
			dispatch(resetLogin);
		};
	}, [user]);
	
	const handleChange = (e) => {
		dispatch(setLoginData({ key: e.target.name, value: e.target.value }));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginRequest(values));
	};
	
	return (
		<LoginPageWrapper data-testid='loginPage'>
			<LoginWindow>
				<LoginLogoWrapper>
					<img src={`${STATIC_URL}/logo.svg`} alt='logo'/>
				</LoginLogoWrapper>
				<Title align='center' margin='5px 0'>{t('signIn')}</Title>
				<Description align='center' margin='5px 0 30px'>{t('signInTitle')}</Description>
				<form>
					<Input
						id='loginInput'
						name='login'
						width='100%'
						value={values.login}
						onChange={handleChange}
						padding='7px 30px 7px 20px'
						placeholder={t('login')}
						fz={14}
						label={t('login')}
					/>
					<ErrorMsg show={false}/>
					<Input
						id='passwordInput'
						name='password'
						width='100%'
						value={values.password}
						onChange={handleChange}
						padding='7px 30px 7px 20px'
						fz={14}
						type='password'
						placeholder={t('password')}
						label={t('password')}
						isSecure
					/>
					<ErrorMsg show={false}/>
					<Button
						clickHandler={(e) => handleSubmit(e)}
						text={t('signIn')}
						isLoading={isLoading}
						disabled={!values.login.length || !values.password.length}
						margin='30px auto 25px'
						height='35px'
						width='200px'
					/>
				</form>
				<LoginPageLinkWrapper>
					<LoginPageLinkTitle>{t('dontHaveAccount')}</LoginPageLinkTitle>
					<LoginPageLink to='/register'>{t('signUpAction')}</LoginPageLink>
				</LoginPageLinkWrapper>
			</LoginWindow>
		</LoginPageWrapper>
	);
};
