import { takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import axios from "axios";

//import { AuthActionTypes } from "../actions/auth";
import * as actions from "../actions/auth";

function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userId");
  yield put(actions.logoutSucceed());
}

function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

function* authUserSaga(action) {
  alert(' AUTH USER');
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url =
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDEeiGYWI22fbkhrB0C9g8qgQT_XtACCmY";
  if (!action.isSignup) {
    url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDEeiGYWI22fbkhrB0C9g8qgQT_XtACCmY";
  }
  try {
    const response = yield axios.post(url, authData);

    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userId", response.data.localId);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

function* authCheckStateSaga(action) {
  alert('I in auth check state')
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem("userId");
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}

export default function* watchAuth() {
  yield takeEvery(actions.AuthActionTypes.authCheckTimeout, checkAuthTimeoutSaga);
  yield takeEvery(actions.AuthActionTypes.authInitiateLogout, logoutSaga);
  yield takeEvery(actions.AuthActionTypes.authUser, authUserSaga);
  yield takeEvery(actions.AuthActionTypes.authCheckState, authCheckStateSaga);
}
