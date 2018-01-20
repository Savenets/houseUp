import { createSelector } from 'reselect';
import { get, pick } from 'lodash';

const UserSelector = state => state.User;

export const getUser = createSelector(UserSelector, User => get(User, 'User', {}));
export const isUserLoaded = createSelector(UserSelector, User => get(User, 'isLoaded', false));

export const getUserId = createSelector(getUser, User => get(User, 'id'));
export const getPrimaryInfo = createSelector(getUser, ({ firstName, lastName }) => ({ firstName, lastName }));
export const getFirstName = createSelector(getUser, User => get(User, 'firstName', ''));
export const getLastName = createSelector(getUser, User => get(User, 'lastName', ''));
export const getFullName = createSelector(
  [getFirstName, getLastName],
  (firstName, lastName) => `${firstName} ${lastName}`.trim()
);
export const getEmailAddress = createSelector(getUser, User => get(User, 'email'));
