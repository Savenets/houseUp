import { spawn, all } from 'redux-saga/effects';

import appWorker from './app';
import watchAuth from './auth';
import watchGoals from './goals';

export default function* root() {
  yield all([
    spawn(appWorker),
    spawn(watchAuth),
    spawn(watchGoals),
  ]);
}
