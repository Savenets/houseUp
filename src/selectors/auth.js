import { createSelector } from 'reselect';
import { get } from 'lodash';

const authSelector = state => state.auth;

// Auth Status
export const getAuthErrorMessage = createSelector(authSelector, auth => get(auth, 'error'));
export const token = createSelector(authSelector, auth => get(auth, 'token'));
export const userId = createSelector(authSelector, auth => get(auth, 'userId'));
export const getSignUpErrorMessage = createSelector(authSelector, auth => get(auth, 'signUpError'));
export const isAuthDataLoaded = createSelector(authSelector, auth => get(auth, 'loading'));
export const isAuthStatusAuthenticated = createSelector(authSelector, auth => Boolean(get(auth, 'userId')));
