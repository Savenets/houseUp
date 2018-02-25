import { takeEvery, put } from "redux-saga/effects";
import { MissionsActionTypes, missionPostSuccess, missionPostStart, missionPostFail, missionsFetchStart, missionsFetchSuccess, missionsFetchFail } from "../actions/missions";
import appActions from '../actions/app';

import axios from '../helpers/axios-missions';

export const postMissionSaga = function* (action) {
  yield  put(missionPostStart());
  try {
    const response = yield axios.post('/missions.json?auth=' + action.payload.token, action.payload.data);
    yield put(missionPostSuccess( response.data.name, action.data));
  } catch (error) {
    yield put (missionPostFail(error));

  } finally {
    yield put(appActions.eraseReducers());
  }
};

export const fetchMissionsSaga = function* (action) {
  yield put(missionsFetchStart());
  try {
    const queryParams = '?auth=' + action.payload.token + '&orderBy="userId"&equalTo="' + action.payload.userId + '"';
    const res = yield axios.get('/missions.json' + queryParams);
    const fetchedMissions = [];
    for ( let key in res.data ) {
      fetchedMissions.push( {
        ...res.data[key],
        id: key,
      });
    }
    yield put(missionsFetchSuccess(fetchedMissions));
  } catch (error) {
    put(missionsFetchFail(error));
  }
};

export default function* watchmissions() {
  yield takeEvery(MissionsActionTypes.missionPost, postMissionSaga);
  yield takeEvery(MissionsActionTypes.missionsFetch, fetchMissionsSaga);
}
