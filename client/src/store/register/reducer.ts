import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegisterState } from '@src/store/register/types';
import { totalRegisterValidate } from '@src/validation/user.validation';

const initialState: IRegisterState = {
	data: {
		login: '',
		password: '',
		lastName: '',
		firstName: '',
		confirmPassword: '',
	},
	touched: {},
	errors: {},
	isLoading: false,
};

export const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		setRegisterData: (state, action: PayloadAction<Record<string, string>>) => {
			state.data[action.payload.key] = action.payload.value;
			state.errors = totalRegisterValidate({
				...state.data,
				[action.payload.key]: action.payload.value,
			});
			state.touched = {
				...state.touched,
				[action.payload.key]: true,
			};
		},
		registerRequestStart: (state) => {
			state.isLoading = true;
		},
		registerRequestEnd: (state) => {
			state.isLoading = false;
		},
		resetRegister: (state) => {
			state.data = initialState.data;
			state.errors = initialState.errors;
			state.touched = initialState.touched;
		},
	},
});
export const { setRegisterData, registerRequestEnd, registerRequestStart, resetRegister } = registerSlice.actions;
