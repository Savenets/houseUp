import { take, takeEvery } from 'redux-saga/effects';

import { UiActionTypes } from '../actions/ui';

function* handleConfirmDialog({ resolve, reject }) {
  const action = yield take([
    UiActionTypes.confirmAccepted,
    UiActionTypes.confirmRejected,
    UiActionTypes.hideConfirm,
  ]);
  if (action.type === UiActionTypes.confirmAccepted) {
    if (typeof resolve === 'function') {
      resolve();
    }
  } else {
    if (typeof reject === 'function') {
      reject();
    }
  }
}

export default function* uiWorker() {
  yield takeEvery(UiActionTypes.showConfirm, handleConfirmDialog);
}
