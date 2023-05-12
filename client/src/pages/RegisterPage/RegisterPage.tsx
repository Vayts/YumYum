import React, { useEffect } from 'react';
import {
	RegisterFormInputWrapper,
	RegisterFormUpWrapper,
	RegisterLogoWrapper, RegisterPageLink, RegisterPageLinkTitle,
	RegisterPageLinkWrapper,
	RegisterPageWrapper,
	RegisterWindow,
} from '@src/pages/RegisterPage/style';
import { STATIC_URL } from '@constants/base';
import { Title } from '@src/components/UI/Title/Title';
import { Description } from '@src/components/UI/Description/Description';
import { useTranslation } from 'react-i18next';
import { Input } from '@src/components/UI/Input/Input';
import { ErrorMsg } from '@src/components/UI/ErrorMsg/ErrorMsg';
import { useAppDispatch, useAppSelector } from '@src/hooks/hooks';
import { selectRegisterData, selectRegisterErrors, selectRegisterLoading, selectRegisterTouched } from '@src/store/register/selectors';
import { resetRegister, setRegisterData } from '@src/store/register/reducer';
import { Button } from '@src/components/UI/Button/Button';
import { totalRegisterValidate } from '@src/validation/user.validation';
import { registerRequest } from '@src/store/register/actions';

export const RegisterPage: React.FC = () => {
	const values = useAppSelector(selectRegisterData);
	const errors = useAppSelector(selectRegisterErrors);
	const touched = useAppSelector(selectRegisterTouched);
	const isLoading = useAppSelector(selectRegisterLoading);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	
	useEffect(() => {
		return () => {
			dispatch(resetRegister());
		};
	}, []);
	
	const handleChange = (e) => {
		dispatch(setRegisterData({ key: e.target.name, value: e.target.value }));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!Object.keys(totalRegisterValidate(values)).length) {
			dispatch(registerRequest(values));
			return true;
		}
		return false;
	};
	
	return (
		<RegisterPageWrapper data-testid='registerPage'>
			<RegisterWindow>
				<RegisterLogoWrapper>
					<img src={`${STATIC_URL}/logo.svg`} alt='logo'/>
				</RegisterLogoWrapper>
				<Title align='center' margin='5px 0'>{t('signUp')}</Title>
				<Description align='center' margin='5px 0 30px'>{t('signUpTitle')}</Description>
				<form>
					<RegisterFormUpWrapper>
						<RegisterFormInputWrapper>
							<Input
								id='firstNameInput'
								name='firstName'
								width='100%'
								value={values.firstName}
								onChange={handleChange}
								padding='7px 30px 7px 20px'
								fz={14}
								isValid={!(errors.firstName && touched.firstName)}
								placeholder={t('firstName')}
								label={t('firstName')}
							/>
							<ErrorMsg show={errors.firstName && touched.firstName}>{t(errors?.firstName)}</ErrorMsg>
						</RegisterFormInputWrapper>
						<RegisterFormInputWrapper>
							<Input
								id='lastNameInput'
								name='lastName'
								width='100%'
								value={values.lastName}
								onChange={handleChange}
								padding='7px 30px 7px 20px'
								fz={14}
								isValid={!(errors.lastName && touched.lastName)}
								placeholder={t('lastName')}
								label={t('lastName')}
							/>
							<ErrorMsg show={errors.lastName && touched.lastName}>{t(errors?.lastName)}</ErrorMsg>
						</RegisterFormInputWrapper>
					</RegisterFormUpWrapper>
					<Input
						id='registerLoginInput'
						name='login'
						width='100%'
						value={values.login}
						onChange={handleChange}
						padding='7px 30px 7px 20px'
						fz={14}
						isValid={!(errors.login && touched.login)}
						placeholder={t('login')}
						label={t('login')}
					/>
					<ErrorMsg show={errors.login && touched.login}>{t(errors?.login)}</ErrorMsg>
					<Input
						id='passwordInput'
						name='password'
						width='100%'
						value={values.password}
						onChange={handleChange}
						padding='7px 30px 7px 20px'
						fz={14}
						isValid={!(errors.password && touched.password)}
						type='password'
						placeholder={t('password')}
						label={t('password')}
						isSecure
					/>
					<ErrorMsg show={errors.password && touched.password}>{t(errors?.password)}</ErrorMsg>
					<Input
						id='confirmPasswordInput'
						name='confirmPassword'
						width='100%'
						value={values.confirmPassword}
						onChange={handleChange}
						padding='7px 30px 7px 20px'
						fz={14}
						isValid={!(errors.confirmPassword && touched.confirmPassword)}
						type='password'
						placeholder={t('confirmPassword')}
						label={t('confirmPassword')}
						isSecure
					/>
					<ErrorMsg show={errors.confirmPassword && touched.confirmPassword}>{t(errors?.confirmPassword)}</ErrorMsg>
					<Button
						clickHandler={(e) => handleSubmit(e)}
						text={t('signUp')}
						disabled={!Object.keys(touched).length || !!Object.keys(errors).length}
						isLoading={isLoading}
						margin='30px auto 25px'
						height='35px'
						width='200px'
					/>
				</form>
				<RegisterPageLinkWrapper>
					<RegisterPageLinkTitle>{t('alreadyHaveAnAccount')}</RegisterPageLinkTitle>
					<RegisterPageLink to='/login'>{t('signIn')}</RegisterPageLink>
				</RegisterPageLinkWrapper>
			</RegisterWindow>
		</RegisterPageWrapper>
	);
};
