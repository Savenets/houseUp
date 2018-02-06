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
    payload: {token, userId}
  };
};

export const authFail = error => {
  return {
    type: AuthActionTypes.authFail,
    payload: { error }
  };
};

export const logout = () => {
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
    payload: { expirationTime }
  };
};

export const auth = (email, password, isSignup) => {
  return {
    type: AuthActionTypes.authUser,
    payload: { email, password, isSignup }
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: AuthActionTypes.authSetRedirectPath,
    payload: { path }
  };
};

export const authCheckState = () => {
  return {
    type: AuthActionTypes.authCheckState
  };
};
