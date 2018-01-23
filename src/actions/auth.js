import pick from 'lodash/pick';
import { firebase } from '../firebase';
import createStore from '../store';

export const AuthActionTypes = {
  awaitingAuthResponse: 'AWAITING:AUTH:RESPONSE',
  authSignIn: 'AUTH::SIGNIN',
  authSignOut: 'AUTH::SIGNOUT',

 // handleAuthStaceChange: 'HANDLE::AUTH:STATE:CHANGE',
 /// authInit: 'AUTH::INIT',
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

/*
export const handleAuthStaceChange = () => {
  console.log('++++++  handleAuthStaceChange')
  return dispatch => {
    console.log('user in action')
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('there is user')
        createStore.dispatch(authAuthenticateUser());
        firebase.db.ref('users')
          .child(user.uid)
          .set(pick(user,['displayName','email','uid','photoURL']));
      } else {
        dispatch(console.log("not logged in "));
      }
    });
  };
};
*/
