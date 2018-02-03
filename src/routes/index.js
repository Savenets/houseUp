import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import Theme from '../styles/Theme';
import PrivateRoute from '../containers/PrivateRouteContainer';
import AppComponent from '../components/AppComponent';
import withAuthentication from '../components/WithAuthentication';
import Home from './Home';
import Auth from './Auth';
import Dashboard from './Dashboard';
//import NotFound from './NotFound';

const  Routes = () => (
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
);

export default withRouter(Routes);
