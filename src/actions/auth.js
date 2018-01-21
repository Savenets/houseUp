export const AuthActionTypes = {
  awaitingAuthResponse: 'AWAITING:AUTH:RESPONSE',
  authSignIn: 'AUTH::SIGNIN',
  authSignOut: 'AUTH::SIGNOUT',

  authAuthenticate: 'AUTH:AUTHENTICATED',
  authError: 'AUTH::FAIL',
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
/*
import pick from 'lodash/pick';
import { auth, provider, database } from '../api/firebase';


export const ReportsActionTypes = {
  findDentistRevenueChart: 'REPORTS_ACTION_TYPES::FIND:DENTIST:REVENUE:CHART',
  findKleerRevenueChart: 'REPORTS_ACTION_TYPES::FIND:KLEER:REVENUE:CHART',
  findMembersAddedData: 'REPORTS_ACTION_TYPES::FIND:MEMBERS:ADDED',
  findPlansChartData: 'REPORTS_ACTION_TYPES::FIND:PLANS:CHART',
  findOverallTotals: 'REPORTS_ACTION_TYPES::FIND:OVERALL:TOTALS',
  findPracticeCancellationChart: 'REPORTS_ACTION_TYPES::FIND:PRACTICE:CANCELLATION:CHART',
  findDentistDashboardTotals: 'REPORTS_ACTION_TYPES::FIND:DENTIST:DASHBOARD:TOTALS',
};

export const AuthActionTypes = {
  awaitingAuthResponse: 'AWAITING:AUTH:RESPONSE',
  authSignIn: 'AUTH::SIGNIN',
  authSignOut: 'AUTH::SIGNOUT',
};

export const signIn = () => {
  auth.signInWithPopup(provider);

  return {
    type: AuthActionTypes.awaitingAuthResponse
  };
};

export const signOut = () => {
  auth.signOut();

  return {
    type: AuthActionTypes.awaitingAuthResponse
  };
};

export const signedIn = user => {
  return {
    type: AuthActionTypes.authSignIn,
    displayName: user.displayName,
    email: user.email,
    uid: user.uid,
    photoURL: user.photoURL
  };
};

export const signedOut = () => {
  return {
    type: AuthActionTypes.authSignOut,
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  };
};

export const startListeningToAuth = () => {
  return (dispatch, getState) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(signedIn(user));
        database.ref('users')
          .child(user.uid)
          .set(pick(user, ['displayName', 'email', 'uid', 'photoURL']));
      } else {
        dispatch(signedOut());
      }
    });
  };
};
*/
