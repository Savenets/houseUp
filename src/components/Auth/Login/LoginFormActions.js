import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import { wrapper, separator, link } from './LoginFormActions.css'

const buttonStyles = {
  height: 56,
  margin: '16px 0',
};

const LoginFormActions = ({ invalid, submitting }) => {

  return (
    <div className={wrapper}>
      <RaisedButton
        disabled={invalid || submitting}
        label="Log in"
        type="submit"
        style={buttonStyles}
        fullWidth
        primary
      />
      <span className={separator}>or</span>
      <Link to="/auth/signup">
        <RaisedButton
          style={buttonStyles}
          fullWidth
          primary
          label="signup"
        />
      </Link>
      {/*<Link to="auth/forgot-password"><span className={link}>Forgot Password?</span></Link>*/}
    </div>
  );
};

LoginFormActions.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default LoginFormActions;

