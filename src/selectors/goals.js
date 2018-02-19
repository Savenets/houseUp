import { createSelector } from 'reselect';
import { get } from 'lodash';

const goalsSelector = state => state.goals;

// goals state
export const getGoalsFetchErrorMessage = createSelector(goalsSelector, goals => get(goals, 'error'));
export const getGoalsInitial = createSelector(goalsSelector, goals => get(goals, 'goalsInitial'));
