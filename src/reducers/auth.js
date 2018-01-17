import { AuthActionTypes } from '../actions/auth';

const initialState = {
  auth: {
    status: 'ANONYMOUS',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  },
};

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case AuthActionTypes.awaitingAuthResponse:
      alert("Awaiting auth response");
      return {
        status: 'AWAITING_AUTH_RESPONSE',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
      };
    case AuthActionTypes.authSignOut:
      alert('auth sign out');
      return {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
      };
    case AuthActionTypes.authSignIn:
      alert("auth sigi in");
      return {
        status: 'SIGNED_IN',
        email: action.email,
        displayName: action.displayName,
        photoURL: action.photoURL,
        uid: action.uid
      };
    default:
      return state;
  }
}
