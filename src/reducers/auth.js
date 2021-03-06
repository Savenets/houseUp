import { AuthActionTypes } from '../actions/auth';
import { AppActionTypes } from '../actions/app';

const initialState = {
  token: null,
  userId: null,
  error: null,
  signUpError: null,
  loading: false,
};

export default function authReducer( state = initialState, action ) {
  switch ( action.type ) {
    case AppActionTypes.eraseReducers: {
      return {
        ...state,
      }
    }
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
    case AuthActionTypes.signUpFail: {
      return {
        ...state,
        signUpError: action.payload.error,
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
    default:
      return state;
  }
};
