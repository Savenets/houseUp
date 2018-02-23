import { spawn, all } from 'redux-saga/effects';

import appWorker from './app';
import watchAuth from './auth';
import watchmissions from './missions';

export default function* root() {
  yield all([
    spawn(appWorker),
    spawn(watchAuth),
    spawn(watchmissions),
  ]);
}
