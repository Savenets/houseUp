import { UserActionTypes } from '../actions/user';

const initialState = {
  fullName: null,
  email: null,
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case UserActionTypes.userAdd:
      return {...state, ...action.payload };
    default:
      return state;
  }
}
