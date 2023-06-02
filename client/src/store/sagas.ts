import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { watchUser } from '@src/store/user/saga';

const sagas = [
  watchUser,
];

export default function* rootSaga(): SagaIterator {
  yield all(sagas.map(fork));
}
