import { GoalsActionTypes } from '../actions/goals';
import { AppActionTypes } from '../actions/app';

const initialState = {
  error: null,
  loading: false,
  goalsInitial: [],
  goals: [],
  goalsPost: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AppActionTypes.eraseReducers: {
      return {
        ...state,
      }
    }
    case GoalsActionTypes.goalsFetch: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    }
    case GoalsActionTypes.goalsFetchStart: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    }
    case GoalsActionTypes.goalsFetchSuccess: {
      return {
        ...state,
        goals: action.payload.goals,
        error: null,
        loading: false,
      }
    }
    case GoalsActionTypes.goalPostSuccess: {
      return {
        ...state,
        loading: false,
        goalsPost: true,
      }
    }
    case GoalsActionTypes.goalsFetchFail: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    }
    case GoalsActionTypes.goalSet: {
      const goal = action.payload.goal;
      return {
        ...state,
        goalsInitial: [...state.goalsInitial, goal],
      }
    }
    case GoalsActionTypes.goalRemove: {
      return {
        ...state,
        goalsInitial: state.goalsInitial.filter(item => item.id !== action.payload.id),
      }
    }
    case GoalsActionTypes.goalPostInit: {
      return {
        ...state,
        goalsPost: false,
      }
    }
    case GoalsActionTypes.goalPostStart: {
      return {
        ...state,
        loading: true,
      }
    }
    case GoalsActionTypes.goalPostFail: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state;
  }
};
