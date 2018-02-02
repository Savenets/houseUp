import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import createStore from '../store';

import Layout from '../components/Layout';
import Theme from '../styles/Theme';
import PrivateRoute from '../containers/PrivateRouteContainer';
import AppComponent from '../components/AppComponent';
import withAuthentication from '../components/WithAuthentication';
import Home from './Home';
import Auth from './Auth';
import Dashboard from './Dashboard';
//import NotFound from './NotFound';

const history = createHistory();
const router = routerMiddleware(history);


const  Routes = () => (
  <Provider store={createStore({}, [ router ])}>
    <ConnectedRouter history={history}>
      <Layout theme={Theme}>
        <AppComponent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            {/* <Route component={NotFound} />*/}
          </Switch>
        </AppComponent>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
