import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@src/store/sagas';
import { userSlice } from '@src/store/user/reducer';
import { modalSlice } from '@src/store/modal/reducer';
import { createRecipeSlice } from '@src/store/createRecipe/reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		modal: modalSlice.reducer,
		createRecipe: createRecipeSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
