import { call, put, takeLatest } from 'redux-saga/effects';
import { registerRequest } from '@src/store/register/actions';
import { errorManager } from '@src/api/errorManager';
import { registerRequestEnd, registerRequestStart } from '@src/store/register/reducer';
import { postRequest } from '@src/api/request';
import { ROUTES } from '@constants/routes';
import { setUser } from '@src/store/user/reducer';
import { SagaIterator } from 'redux-saga';

function* registerSaga(action): SagaIterator {
	const { values } = action.payload;
	try {
		yield put(registerRequestStart());
		const response = yield call(postRequest, ROUTES.auth.register, values);
		if (response.data) {
			yield put(setUser(response.data));
			yield put(registerRequestEnd());
		}
	} catch (e) {
		errorManager(e);
		yield put(registerRequestEnd());
	}
}

export function* watchRegister(): SagaIterator {
	yield takeLatest(registerRequest, registerSaga);
}
