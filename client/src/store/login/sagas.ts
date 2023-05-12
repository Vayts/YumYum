import { SagaIterator } from 'redux-saga';
import { put, takeLatest, call } from 'redux-saga/effects';
import { loginRequest } from '@src/store/login/actions';
import { loginRequestEnd, loginRequestStart } from '@src/store/login/reducer';
import { postRequest } from '@src/api/request';
import { ROUTES } from '@constants/routes';
import { errorManager } from '@src/api/errorManager';
import { setUser } from '@src/store/user/reducer';

function* loginSaga(action): SagaIterator {
	const { values } = action.payload;
	try {
		yield put(loginRequestStart());
		const response = yield call(postRequest, ROUTES.auth.login, values);
		if (response.data) {
			yield put(loginRequestEnd());
			yield put(setUser(response.data));
		}
	} catch (e) {
		errorManager(e);
		yield put(loginRequestEnd());
	}
} 

export function* watchLogin(): SagaIterator {
	yield takeLatest(loginRequest, loginSaga);
}
