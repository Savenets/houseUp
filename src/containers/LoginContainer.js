import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import * as authActions from '../actions/auth';
import { getAuthErrorMessage, isAuthDataLoaded } from '../selectors/auth';

import Login from '../components/Auth/Login';

const formName = 'LoginForm';

const mapStateToProps = createStructuredSelector({
  errorMessage: getAuthErrorMessage,
  loading: isAuthDataLoaded,
});

const loginFormContainer = reduxForm({
  form: formName,
  onSubmit: (form, dispatch) => {
    const { email, password } = form;
    const isSignup = false;
    dispatch( authActions.auth( email, password, isSignup ));
  },
})(Login);

export default connect(mapStateToProps)(loginFormContainer);
