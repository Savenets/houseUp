import { put, takeEvery, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as AuthActions from '../actions/auth';

function* handleDashboardPush() {
  yield put(push({
    pathname: '/dashboard/',
  }));
}

function* handleAuthUser(user) {
  yield put(AuthActions.authAuthenticateUser(user));
}

export default function* authDashboardWorker() {
  yield takeEvery(AuthActions.AuthActionTypes.authAuthenticate, handleDashboardPush);
}
