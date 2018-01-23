import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const  Auth = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/login`} component={Login} />
    <Route path={`${url}/logout`} component={Login} />
    <Route path={`${url}/signup`} component={Signup} />
    <Route path={`${url}/forgot-password`} component={ForgotPassword} />
  </Switch>
);

Auth.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Auth;

