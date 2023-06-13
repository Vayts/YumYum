import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { watchUser } from '@src/store/user/saga';
import { watchCreateRecipe } from '@src/store/createRecipe/sagas';

const sagas = [
  watchUser,
  watchCreateRecipe,
];

export default function* rootSaga(): SagaIterator {
  yield all(sagas.map(fork));
}
