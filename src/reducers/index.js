import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import auth from './auth';
import user from './user';
import missions from './missions';

export default combineReducers({
  auth,
  router,
  form,
  user,
  missions,
});
