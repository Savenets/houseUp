import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import LogoutContainer from '../../containers/LogoutContainer';
import AnonymousRoute from '../../containers/AnonymousRouteContainer'

const  Auth = ({ match: { url } }) => (
  <Switch>
    <AnonymousRoute path={`${url}/signup`} component={Signup} />
    <Route path={`${url}/logout`} component={LogoutContainer} />
    <AnonymousRoute to={`${url}/login`} component={Login} />
  </Switch>
);

Auth.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Auth;

