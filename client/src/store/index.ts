import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@src/store/sagas';
import { loginSlice } from '@src/store/login/reducer';
import { userSlice } from '@src/store/user/reducer';
import { registerSlice } from '@src/store/register/reducer';
import { modalSlice } from '@src/store/modal/reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		login: loginSlice.reducer,
		register: registerSlice.reducer,
		modal: modalSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
