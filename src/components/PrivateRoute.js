import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, redirectTo, ...rest }) => {
  console.log(isAuthenticated + " check ")
  return (
    <Route
      {...rest}
      render={props => isAuthenticated
        ? <Component {...props} />
        : <Redirect to={redirectTo} />
      }
    />
  );
};

PrivateRoute.defaultProps = {
  redirectTo: '/auth/login',
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.string.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
