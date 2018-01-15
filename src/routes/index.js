import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import createStore from '../store';


import Layout from '../components/Layout';

import Theme from '../styles/Theme';
import Home from './Home';
//import NotFound from './NotFound';

const history = createHistory();
const router = routerMiddleware(history);

export default (
  <Provider store={createStore({}, [ router ])}>
    <Layout theme={Theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route component={NotFound} />*/}
        </Switch>
      </ConnectedRouter>
    </Layout>
  </Provider>
);
