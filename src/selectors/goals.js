import { createSelector } from 'reselect';
import { get } from 'lodash';

const goalsSelector = state => state.goals;

// goals state
export const getGoalsFetchErrorMessage = createSelector(goalsSelector, goals => get(goals, 'error'));
export const getGoalsInitial = createSelector(goalsSelector, goals => get(goals, 'goalsInitial'));
export const loading = createSelector(goalsSelector, goals => get(goals, 'loading'));
export const goals = createSelector(goalsSelector, goals => get(goals, 'goals'));
