import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyles = {
  height: 56,
  margin: '16px 0',
};

const LoginFormActions = ({ invalid, submitting }) => {

  return (
    <div>
      <RaisedButton
        disabled={invalid || submitting}
        label="Log in"
        type="submit"
        style={buttonStyles}
        fullWidth
        primary
      />
      <Link href="/" to="auth/forgot-password">
        Forgot Password?
      </Link>
    </div>
  );
};

LoginFormActions.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default LoginFormActions;

