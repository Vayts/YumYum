import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { watchLogin } from '@src/store/login/sagas';
import { watchRegister } from '@src/store/register/sagas';
import { watchUser } from '@src/store/user/saga';

const sagas = [
	watchLogin,
	watchRegister,
	watchUser,
];

export default function* rootSaga(): SagaIterator {
	yield all(sagas.map(fork));
}
