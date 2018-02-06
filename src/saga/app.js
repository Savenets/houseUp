import uiWorker from './ui';

export default function* appInitialise() {
  yield uiWorker();
}
