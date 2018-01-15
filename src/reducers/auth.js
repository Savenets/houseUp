import { pick } from 'lodash';

//import { AuthActionTypes } from 'Common/actions/auth';
//import { AccountActionTypes } from 'Common/actions/account';

const initialState = {
  session: null,
  isAuthStatusChecked: false,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `hello::SUCCESS`: {
      const isAuthStatusChecked = true;
      const isAuthenticated = true;
      return { ...state, isAuthStatusChecked, isAuthenticated };
    }

    default: {
      return state;
    }
  }
};
