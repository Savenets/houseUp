import { AuthActionTypes } from '../actions/auth';
import { AppActionTypes }  from '../actions/app';

const initialState = {
    userAuth: null,
    error: null,
    isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {

    case AppActionTypes.eraseReducers: {
      return initialState;
    }

    case AuthActionTypes.authAuthenticate:
      return {...state, isAuthenticated: true};

    case AuthActionTypes.authAuthenticateUser:
      alert("im in reducer " + action.payload);
      return {...state, userAuth: action.payload};

    case AuthActionTypes.authError:
      return {...state, error: action.error};

    case AuthActionTypes.authLogout:
      return {...state };

    default:
      return state;
  }
}
