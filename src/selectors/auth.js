import { createSelector } from 'reselect';
import { get } from 'lodash';

const authSelector = state => state.auth;

// Auth Status
export const getAuthErrorMessage = createSelector(authSelector, auth => get(auth, 'error'));

//Auth => userAuth
export const getUserAuth = createSelector(authSelector, auth => get(auth, 'userAuth', {}));

export const isAuthStatusAuthenticated = createSelector(getUserAuth, auth => get(auth, 'uid'));
