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


/*
import extend from 'lodash/extend';
import clone from 'lodash/clone'


export default function usersReducer(state = {}, action) {
  switch(action.type) {
    case 'ADD_USER':
      return extend(clone(state), { [action.uid]: {
        displayName: action.displayName,
        email: action.email,
        uid: action.uid,
        photoURL: action.photoURL
      }});
    default:
      return state;
  }
}
*/
