import { put, takeEvery, call } from 'redux-saga/effects';

import { push } from 'react-router-redux';
import * as AuthActions from '../actions/auth';
import { firebase } from '../firebase';

function* handleDashboardPush() {
  alert('saga push')
  yield put(push({
    pathname: '/dashboard/',
  }));
}

function* handleAuthUser(user) {
  yield put(AuthActions.authAuthenticateUser(user));
}

function* handleAuthenticateInit() {
  yield firebase.auth.onAuthStateChanged(user => {
    alert('in yield ')
    handleAuthUser(user);
  });

}


export default function* authDashboardWorker() {
  //yield takeEvery(AuthActions.AuthActionTypes.authAuthenticate, handleDashboardPush);
  //yield takeEvery(AuthActions.AuthActionTypes.authAuthenticateInit, handleAuthenticateInit);
}



/* const authUser = await firebase.auth.onAuthStateChanged(authUser => {
 console.log(authUser)
 authUser ? user = authUser : null;
 /!*authUser
 ? dispatch(authAuthenticateUser(authUser))
 : dispatch(authAuthenticateUser(null))*!/
 });
 console.log('this is user at the bottom ');
 console.log(user)*/
