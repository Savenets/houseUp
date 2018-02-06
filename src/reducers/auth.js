import { AuthActionTypes } from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};

export default function authReducer( state = initialState, action ) {
  switch ( action.type ) {
    case AuthActionTypes.authStart: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    }
    case AuthActionTypes.authSuccess: {
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        error: null,
        loading: false,
      }
    }
    case AuthActionTypes.authFail: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    }
    case AuthActionTypes.authLogout: {
      return {
        ...state,
        token: null,
        userId: null,
      }
    }
    case AuthActionTypes.authSetRedirectPath: {
      return {
        ...state,
        authRedirectPath: action.payload.path
      }
    }
    default:
      return state;
  }
};
