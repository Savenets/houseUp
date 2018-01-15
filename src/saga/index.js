import { spawn, all } from 'redux-saga/effects';

import appWorker from './app';

export default function* root() {
  yield all([
    spawn(appWorker),
  ]);
}
