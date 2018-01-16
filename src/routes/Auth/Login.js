import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { loginWrapper, login, loginContainer } from './Login.css';

const Login = () => {
  return (
    <div className={loginWrapper}>
      <Paper className={loginContainer} zDepth={4} rounded={false}>
        <h1 className={login}>login</h1>
        <RaisedButton label="login with google" primary />
      </Paper>
    </div>
  );
};

export default Login;

