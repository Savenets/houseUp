import React from 'react';
import LoginContainer from '../../../containers/LoginContainer';

import { loginWrapper } from './Login.css';

const Login = () => {
  return (
    <div className={loginWrapper}>
      <LoginContainer />
    </div>
  );
};

export default Login;
