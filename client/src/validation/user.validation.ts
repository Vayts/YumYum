import { DEFAULT_REGEX, LOGIN_REGEX, NUMBER_REGEX, PASSWORD_REGEX, UPPER_CASE_REGEX } from '@constants/regex';
import i18n from 'i18next';
import { IRegisterState } from '@src/store/register/types';

function validateFirstName(str: string): Record<string, string> {
	const errors: Record<string, string> = {};
	const t = i18n.t;
	
	if (str === '') {
		errors.firstName = t('requiredField');
		return errors;
	}
	
	if (!DEFAULT_REGEX.test(str)) {
		errors.firstName = t('incorrectValue');
		return errors;
	}
	
	if (str.length < 2) {
		errors.firstName = t('atLeast', { value: 2 });
		return errors;
	}
	
	if (str.length > 20) {
		errors.firstName = t('lessThan', { value: 20 });
		return errors;
	}
	
	return errors;
}

function validateLastName(str: string): Record<string, string> {
	const errors: Record<string, string> = {};
	const t = i18n.t;
	
	if (str === '') {
		errors.lastName = t('requiredField');
		return errors;
	}
	
	if (!DEFAULT_REGEX.test(str)) {
		errors.lastName = t('incorrectValue');
		return errors;
	}
	
	if (str.length < 2) {
		errors.lastName = t('atLeast', { value: 2 });
		return errors;
	}
	
	if (str.length > 20) {
		errors.lastName = t('lessThan', { value: 20 });
		return errors;
	}
	
	return errors;
}

function validateLogin(str: string): Record<string, string> {
	const errors: Record<string, string> = {};
	const t = i18n.t;
	
	if (str === '') {
		errors.login = t('requiredField');
		return errors;
	}
	
	if (!LOGIN_REGEX.test(str)) {
		errors.login = t('incorrectValue');
		return errors;
	}
	
	if (str.length < 5) {
		errors.login = t('atLeast', { value: 5 });
		return errors;
	}
	
	if (str.length > 20) {
		errors.login = t('lessThan', { value: 20 });
		return errors;
	}
	
	return errors;
}

function validatePassword(str: string): Record<string, string> {
	const errors: Record<string, string> = {};
	const t = i18n.t;
	
	if (str === '') {
		errors.password = t('requiredField');
		return errors;
	}
	
	if (!UPPER_CASE_REGEX.test(str)) {
		errors.password = t('atLeast1UpperCase');
		return errors;
	}
	
	if (!NUMBER_REGEX.test(str)) {
		errors.password = t('atLeast1Number');
		return errors;
	}
	
	if (!PASSWORD_REGEX.test(str)) {
		errors.password = t('incorrectValue');
		return errors;
	}
	
	if (str.length < 8) {
		errors.password = t('atLeast', { value: 8 });
		return errors;
	}
	
	if (str.length > 25) {
		errors.password = t('lessThan', { value: 25 });
		return errors;
	}
	
	return errors;
}

function validateConfirmPassword(str: string, password: string): Record<string, string> {
	const errors: Record<string, string> = {};
	const t = i18n.t;
	
	if (str === '') {
		errors.confirmPassword = t('requiredField');
	}
	
	if (str !== password) {
		errors.confirmPassword = t('confirmPasswordError');
	}
	
	return errors;
}

export function totalRegisterValidate(values: IRegisterState['data']): Record<string, string> {
	const checkFirstName = validateFirstName(values.firstName);
	const checkLastName = validateLastName(values.lastName);
	const checkLogin = validateLogin(values.login);
	const checkPassword = validatePassword(values.password);
	const checkConfirmPassword = validateConfirmPassword(values.confirmPassword, values.password);
	
	return {
		...checkFirstName,
		...checkLastName,
		...checkLogin,
		...checkPassword,
		...checkConfirmPassword,
	};
}
