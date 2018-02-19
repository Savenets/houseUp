import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import auth from './auth';
import user from './user';
import goals from './goals';

export default combineReducers({
  auth,
  router,
  form,
  user,
  goals,
});
