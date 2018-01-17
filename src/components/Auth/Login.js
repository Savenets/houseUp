import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { loginWrapper, login, loginContainer } from './Login.css';

const Login = ({ signIn, signOut }) => {
  return (
    <div className={loginWrapper}>
      <Paper className={loginContainer} zDepth={4} rounded={false}>
        <h1 className={login}>login</h1>
        <RaisedButton
          label="login with google"
          primary
          onClick={signIn}
        />

        <RaisedButton
          label="sign out"
          primary
          onClick={signOut}
        />

      </Paper>
    </div>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Login;
