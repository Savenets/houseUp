import React from 'react';
import SignUpContainer from '../../../containers/SignUpContainer';

import { loginWrapper } from './Signup.css';

const SignUp = () => {
  return (
    <div className={loginWrapper}>
      <SignUpContainer />
    </div>
  );
};

export default SignUp;
