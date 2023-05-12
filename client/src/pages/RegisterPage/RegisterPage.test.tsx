import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { RegisterPage } from '@src/pages/RegisterPage/RegisterPage';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Register Page', () => {
	const initialState = {
		register: {
			data: {
				firstName: '',
				lastName: '',
				login: '',
				password: '',
				confirmPassword: '',
			},
			isLoading: false,
			errors: {},
			touched: {},
		},
	};
	const store = mockStore(initialState);
	const component = (
		<MemoryRouter>
			<Provider store={store}><RegisterPage/></Provider>
		</MemoryRouter>
	);
	it('calls changeHandler with correct values', () => {
		const { getByLabelText } = render(component);
		const loginInput = getByLabelText('login');
		fireEvent.change(loginInput, { target: { value: '1' } });
		const expectedAction = [{
			type: 'register/setRegisterData',
			payload: {
				key: 'login',
				value: '1',
			},
		}];
		expect(store.getActions()).toEqual(expectedAction);
	});
	it('should render Register Page', () => {
		const { getByTestId } = render(component);
		const page = getByTestId('registerPage');
		expect(page)
			.toBeInTheDocument();
	});
	it('should render login input', () => {
		const { getByLabelText } = render(component);
		const loginInput = getByLabelText('login');
		expect(loginInput)
			.toBeInTheDocument();
	});
	it('should render firstName input', () => {
		const { getByLabelText } = render(component);
		const loginInput = getByLabelText('firstName');
		expect(loginInput)
			.toBeInTheDocument();
	});
	it('should render lastName input', () => {
		const { getByLabelText } = render(component);
		const loginInput = getByLabelText('lastName');
		expect(loginInput)
			.toBeInTheDocument();
	});
	it('should render password input', () => {
		const { getByLabelText } = render(component);
		const passwordInput = getByLabelText('password');
		expect(passwordInput)
			.toBeInTheDocument();
	});
	it('should render confirm password input', () => {
		const { getByLabelText } = render(component);
		const passwordInput = getByLabelText('confirmPassword');
		expect(passwordInput)
			.toBeInTheDocument();
	});
	it('should render confirm button', () => {
		const { getByRole } = render(component);
		const confirmButton = getByRole('button');
		expect(confirmButton)
			.toBeInTheDocument();
	});
	it('calls submitHandler with correct values', async () => {
		const initialState = {
			register: {
				data: {
					login: 'testLogin',
					password: '5645856aD',
					firstName: 'TestName',
					lastName: 'TestLastName',
					confirmPassword: '5645856aD',
				},
				errors: {},
				touched: {
					login: true,
				},
			},
		};
		const store = mockStore(initialState);
		const { getByRole } = render(
			<MemoryRouter>
				<Provider store={store}><RegisterPage /></Provider>
			</MemoryRouter>,
		);
		const expectedAction = [{
			type: 'REGISTER_REQUEST',
			payload: {
				values: {
					login: 'testLogin',
					password: '5645856aD',
					firstName: 'TestName',
					lastName: 'TestLastName',
					confirmPassword: '5645856aD',
				},
			},
		}];
		const button = getByRole('button');
		fireEvent.click(button);
		expect(store.getActions()).toEqual(expectedAction);
	});
	it('doesnt calls submitHandler with invalid values', async () => {
		const initialState = {
			register: {
				data: {
					login: '1',
					password: '5645856aD',
					firstName: 'TestName',
					lastName: 'TestLastName',
					confirmPassword: '5645856aD',
				},
				errors: {},
				touched: {
					login: true,
				},
			},
		};
		const store = mockStore(initialState);
		const { getByRole } = render(
			<MemoryRouter>
				<Provider store={store}><RegisterPage /></Provider>
			</MemoryRouter>,
		);
		const button = getByRole('button');
		fireEvent.click(button);
		expect(store.getActions()).toEqual([]);
	});
});
