import { spawn, all } from 'redux-saga/effects';

import appWorker from './app';
import authWorker from './auth';

export default function* root() {
  yield all([
    spawn(appWorker),
    spawn(authWorker),
  ]);
}
