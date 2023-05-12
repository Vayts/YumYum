import { IModalState } from '@src/store/modal/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IModalState = {
	type: null,
	content: null,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModal: (state, action: PayloadAction<IModalState>) => {
			state.type = action.payload.type;
			state.content = action.payload.content;
		},
		resetModal: (state) => {
			state.type = initialState.type;
			state.content = initialState.content;
		},
	},
});

export const { setModal, resetModal } = modalSlice.actions;
