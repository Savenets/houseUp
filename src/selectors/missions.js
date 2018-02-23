import { createSelector } from 'reselect';
import { get } from 'lodash';

const missionsSelector = state => state.missions;

// missions state
export const getmissionsFetchErrorMessage = createSelector(missionsSelector, missions => get(missions, 'error'));
export const getmissionsInitial = createSelector(missionsSelector, missions => get(missions, 'missionsInitial'));
export const loading = createSelector(missionsSelector, missions => get(missions, 'loading'));
export const missions = createSelector(missionsSelector, missions => get(missions, 'missions'));
