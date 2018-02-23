import { MissionsActionTypes } from '../actions/missions';
import { AppActionTypes } from '../actions/app';

const initialState = {
  error: null,
  loading: false,
  missionsInitial: [],
  targets: [],
  missionPost: false,
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case AppActionTypes.eraseReducers: {
      return {
        ...state,
      }
    }
    case MissionsActionTypes.missionsFetch: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    }
    case MissionsActionTypes.missionsFetchStart: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    }
    case MissionsActionTypes.missionsFetchSuccess: {
      return {
        ...state,
        missions: action.payload.missions,
        error: null,
        loading: false,
      }
    }
    case MissionsActionTypes.missionPostSuccess: {
      return {
        ...state,
        loading: false,
        missionPost: true,
      }
    }
    case MissionsActionTypes.missionsFetchFail: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    }
    case MissionsActionTypes.missionSet: {
      const mission = action.payload.mission;
      return {
        ...state,
        missionsInitial: [...state.missionsInitial, mission],
      }
    }
    case MissionsActionTypes.missionRemove: {
      return {
        ...state,
        missionsInitial: state.missionsInitial.filter(item => item.id !== action.payload.id),
      }
    }
    case MissionsActionTypes.missionPostInit: {
      return {
        ...state,
        missionsPost: false,
      }
    }
    case MissionsActionTypes.missionPostStart: {
      return {
        ...state,
        loading: true,
      }
    }
    case MissionsActionTypes.missionPostFail: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state;
  }
};
