import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { loginWrapper, login, loginContainer } from './Login.css';

const Login = ({ signIn }) => {
  return (
    <div className={loginWrapper}>
      <Paper className={loginContainer} zDepth={4} rounded={false}>
        <h1 className={login}>login</h1>
        <RaisedButton
          label="login with google"
          primary
          onClick={signIn}
        />
      </Paper>
    </div>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default Login;
