import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';

import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import LogoutContainer from '../../containers/LogoutContainer';

const  Auth = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/signup`} component={Signup} />
    <Route path={`${url}/forgot-password`} component={ForgotPassword} />
    {/*<PrivateRoute path={`${url}/logout`} component={LogoutContainer} />*/}
    <Route to={`${url}/login`} component={Login} />
  </Switch>
);

Auth.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Auth;

