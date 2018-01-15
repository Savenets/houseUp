import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import persistState from 'redux-localstorage';
import _ from 'lodash';

export default (initialState = {}, additionalMiddlewares = []) => {
  // It's application scope reducers and sagas, depends on webpack entry point

  const reducers = require('../reducers').default;
  const sagas = require('../saga').default;

  const sagaMiddleware = createSagaMiddleware();

  const PATHS = [
    'notificationsState',
    'enrollment',
    'enrollmentSteps',
  ];

  const slicer = paths => state => _.zipObjectDeep( paths, _.at( state, paths ) );

  const enhancers = [
    persistState( PATHS, { key: 'redux-storage', slicer } ),
  ];

  const middleware = [
    sagaMiddleware,
    ...additionalMiddlewares,
  ];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept(reducers, () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
};
