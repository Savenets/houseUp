import { createSelector } from 'reselect';
import { get } from 'lodash';

const authSelector = state => state.auth;

// Auth Status
export const getAuthErrorMessage = createSelector(authSelector, auth => get(auth, 'error'));

export const isAuthStatusAuthenticated = createSelector(authSelector, auth => get(auth, 'userId'));
