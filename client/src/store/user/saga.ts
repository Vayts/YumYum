import { ROUTES } from '@constants/routes';
import { axiosPrivate } from '@src/api/axios';
import { getRequest } from '@src/api/request';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { refreshRequest, refreshRequestError, refreshRequestSuccess, setUser } from '@src/store/user/reducer';
import { Action } from 'redux';
import { SagaIterator } from 'redux-saga';
import { tokenExpiredErrorRequest } from '@src/store/user/actions';
import { selectUser } from '@src/store/user/selectors';

export function* workerUser(): SagaIterator {
	try {
		const response = yield call(getRequest, ROUTES.auth.refresh, axiosPrivate);
		yield put(setUser(response.data));
		yield put(refreshRequestSuccess());
	} catch (e) {
		yield put(refreshRequestError());
	}
}

export function* tokenExpired(action: () => Action): SagaIterator {
	yield call(workerUser);
	const user = yield select(selectUser);
	if (user.token) {
		yield put(action());
	}
}

export function* watchUser(): SagaIterator {
	yield takeLatest(refreshRequest, workerUser);
	yield takeLatest(tokenExpiredErrorRequest, workerUser);
}
