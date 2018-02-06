import { AuthActionTypes } from '../actions/auth';
import { updateObject } from '../helpers/utils';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};

const authStart = ( state, action ) => {
  return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
  return updateObject( state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  } );
};

const authFail = (state, action) => {
  return updateObject( state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path })
};

export default function authReducer( state = initialState, action ) {
  switch ( action.type ) {
    case AuthActionTypes.authStart: return authStart(state, action);
    case AuthActionTypes.authSuccess: return authSuccess(state, action);
    case AuthActionTypes.authFail: return authFail(state, action);
    case AuthActionTypes.authLogout: return authLogout(state, action);
    case AuthActionTypes.authSetRedirectPath: return setAuthRedirectPath(state,action);
    default:
      return state;
  }
};
