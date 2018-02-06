import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AnonymousRoute = ({ component: Component, isAuthenticated, redirectTo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated
        ? <Redirect to={redirectTo} />
        : <Component {...props} />
      }
    />
  );
};

AnonymousRoute.defaultProps = {
  redirectTo: '/dashboard',
};

AnonymousRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
};

export default AnonymousRoute;

