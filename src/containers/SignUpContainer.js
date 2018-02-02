import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { auth, db } from '../firebase';
import * as authActions from '../actions/auth';
import * as userActions from '../actions/user';
import { getAuthErrorMessage } from '../selectors/auth';

import SignUp from '../components/Auth/SignUp';

const formName = 'SignUpForm';

const mapStateToProps = createStructuredSelector({
  errorMessage: getAuthErrorMessage,
});

const loginFormContainer = reduxForm({
  form: formName,
  onSubmit: async (form, dispatch) => {
    const { email, password, fullName } = form;
    try {
      const userAuth = await auth.doCreateUserWithEmailAndPassword(email, password);
      dispatch(userActions.userAdd({ fullName, email }));
      dispatch(authActions.authAuthenticate());
      dispatch(push({
        pathname: '/dashboard/',
      }));
      db.doCreateUser(userAuth.uid, fullName, email);
    } catch ({ message }) {
      dispatch(authActions.authError(message));
      console.log(message)
    }
  },
})(SignUp);

export default connect(mapStateToProps)(loginFormContainer);
