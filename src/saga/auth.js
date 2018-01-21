import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { AuthActionTypes } from '../actions/auth';

function* handleCancelFlow() {
  yield put(push({
    pathname: '/dashboard/',
  }));
}

export default function* authDashboardWorker() {
  console.log("saga in action");
  yield takeEvery(AuthActionTypes.authAuthenticate, handleCancelFlow);
}
