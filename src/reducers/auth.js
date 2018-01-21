import { AuthActionTypes } from '../actions/auth';

const initialState = {
    isAuthenticated: false,
    error: null,
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case AuthActionTypes.authAuthenticate:
      return {...state, isAuthenticated: true};
    case AuthActionTypes.authError:
      return {...state, error: action.error};
    default:
      return state;
  }
}
