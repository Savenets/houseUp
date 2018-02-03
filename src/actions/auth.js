export const AuthActionTypes = {
  authCheckState:'AUTH::CHECK:STATE',
  authUser: 'AUTH::USER',
  authStart: 'AUTH::START',
  authSuccess: 'AUTH::SUCCESS',
  authFail: 'AUTH::FAIL',
  authCheckTimeout: 'AUTH::CHECK:TIMEOUT',
  authInitiateLogout:'AUTH::INITIATE:LOGOUT',
  authLogout: 'AUTH::LOGOUT',
  authSetRedirectPath: 'AUTH::SET:REDIRECT:PATH',
};

export const authStart = () => {
  return {
    type: AuthActionTypes.authStart
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: AuthActionTypes.authSuccess,
    idToken: token,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: AuthActionTypes.authFail,
    error: error
  };
};

export const logout = () => {
  // localStorage.removeItem('token');
  // localStorage.removeItem('expirationDate');
  // localStorage.removeItem('userId');
  return {
    type: AuthActionTypes.authInitiateLogout
  };
};

export const logoutSucceed = () => {
  return {
    type: AuthActionTypes.authLogout
  };
};

export const checkAuthTimeout = expirationTime => {
  return {
    type: AuthActionTypes.authCheckTimeout,
    expirationTime: expirationTime
  };
};

export const auth = (email, password, isSignup) => {
  return {
    type: AuthActionTypes.authUser,
    email: email,
    password: password,
    isSignup
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: AuthActionTypes.authSetRedirectPath,
    path: path
  };
};

export const authCheckState = () => {
  return {
    type: AuthActionTypes.authCheckState
  };
};






/*
export const AuthActionTypes = {
  awaitingAuthResponse: 'AWAITING:AUTH:RESPONSE',
  authSignIn: 'AUTH::SIGNIN',
  authSignOut: 'AUTH::SIGNOUT',

  authAuthenticateInit: 'AUTH::AUTHENTICATE:USER:START',
  authAuthenticateUser: 'AUTH::AUTHENTICATE:USER',
  authAuthenticate: 'AUTH:AUTHENTICATED',
  authError: 'AUTH::FAIL',
};

export const authInit = () => {
  return {
    type: AuthActionTypes.authInit
  }
};

export const authError = error => {
  return {
    type: AuthActionTypes.authError,
    error,
  }
};

export const authAuthenticate = () => {
  return {
    type: AuthActionTypes.authAuthenticate
  }
};


export const authAuthenticateUser = user => {
  console.log(user);
  return {
    type: AuthActionTypes.authAuthenticateUser,
    payload: user,
  }
};

export const authSignOut = () => {
  return {
    type: AuthActionTypes.authSignOut,
  }
};

export const authAuthenticateInit = () => {
  return {
    type: AuthActionTypes.authAuthenticateInit,
  }
};
*/
