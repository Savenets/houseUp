import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import createStore from '../store';

import Layout from '../components/Layout';

import Theme from '../styles/Theme';
import Home from './Home';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
//import NotFound from './NotFound';

const history = createHistory();
const router = routerMiddleware(history);

export default (
  <Provider store={createStore({}, [ router ])}>
    <Layout theme={Theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          {/* <Route component={NotFound} />*/}
        </Switch>
      </ConnectedRouter>
    </Layout>
  </Provider>
);



/*
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initial-state';
import Application from './containers/ApplicationContainer';
import { startListeningToAuth } from './actions/auth';
import { startListeningForUsers } from './actions/user';
import { startListeningForMessages } from './actions/messages';
import './index.css';

const middleware = [ thunk ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

store.dispatch(startListeningToAuth());
store.dispatch(startListeningForUsers());
store.dispatch(startListeningForMessages());

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);*/
