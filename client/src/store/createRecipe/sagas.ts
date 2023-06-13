import { call, put, takeLatest } from 'redux-saga/effects';
import { addRecipeRequest } from '@src/store/createRecipe/actions';
import { SagaIterator } from 'redux-saga';
import { getRequest, postRequest, postRequestWithFiles } from '@src/api/request';
import { ROUTES } from '@constants/routes';

function* createRecipeWorker(action: any): SagaIterator {
  const { values } = action.payload;
  console.log(values);
  try {
    const response = yield call(postRequestWithFiles, ROUTES.recipe.create, values);
    // yield put(setUser(response.data));
    // yield put(refreshRequestSuccess());
  } catch (e) {
    // yield put(refreshRequestError());
  }
}

export function* watchCreateRecipe(): SagaIterator {
  yield takeLatest(addRecipeRequest, createRecipeWorker);
}
