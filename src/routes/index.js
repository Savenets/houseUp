import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import createStore from '../store';


import LayoutContainer from 'Common/containers/LayoutContainer';

import Theme from '../styles/Theme';
import Home from './Home';
//mport NotFound from './NotFound';

const history = createHistory();
const router = routerMiddleware(history);

export default (
  <Provider store={createStore({}, [ router ])}>
    <LayoutContainer theme={Theme}>
      <AccountCheckContainer>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={Home} />
           {/* <Route component={NotFound} />*/}
          </Switch>
        </ConnectedRouter>
      </AccountCheckContainer>
      <ConfirmContainer />
    </LayoutContainer>
  </Provider>
);
