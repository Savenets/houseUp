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
