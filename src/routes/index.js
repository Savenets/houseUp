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

          {/* <Route component={NotFound} />*/}
        </Switch>
      </ConnectedRouter>
    </Layout>
  </Provider>
);
