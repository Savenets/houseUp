import { takeEvery, put } from "redux-saga/effects";
import { GoalsActionTypes, goalPostSuccess, goalPostStart, goalPostFail, goalsFetchStart, goalsFetchSuccess, goalsFetchFail } from "../actions/goals";
import appActions from '../actions/app';

import axios from '../helpers/axios-goals';

export const postGoalsSaga = function* (action) {
  yield  put(goalPostStart());
  try {
    const response = yield axios.post('/goals.json?auth=' + action.payload.token, action.payload.data);
    yield put(goalPostSuccess( response.data.name, action.data));
  } catch (error) {
    yield put (goalPostFail(error));
  } finally {
    yield put(appActions.eraseReducers());
  }
};

export const fetchOrdersSaga = function* (action) {
  yield put(goalsFetchStart());
  try {
    const queryParams = '?auth=' + action.payload.token + '&orderBy="userId"&equalTo="' + action.payload.userId + '"';
    const res = yield axios.get('/goals.json' + queryParams);
    const fetchedOrders = [];
    for ( let key in res.data ) {
      fetchedOrders.push( {
        ...res.data[key],
        id: key
      });
    }
    yield put(goalsFetchSuccess(fetchedOrders));
  } catch (error) {
    put(goalsFetchFail(error));
  }
};

export default function* watchGoals() {
  yield takeEvery(GoalsActionTypes.goalPost, postGoalsSaga);
  yield takeEvery(GoalsActionTypes.goalsFetch, fetchOrdersSaga);
}
