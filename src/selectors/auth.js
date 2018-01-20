import { createSelector } from 'reselect';
import { get } from 'lodash';

const authSelector = state => state.auth;

// Auth Status
export const isAuthStatusChecked = createSelector(authSelector, auth => get(auth, 'isAuthStatusChecked', false));
export const getAuthErrorMessage = createSelector(authSelector, auth => get(auth, 'error'));

export const isAuthenticated = createSelector(
  authSelector,
  auth => get(auth, 'isAuthStatusChecked', false) && get(auth, 'isAuthenticated', false)
);

