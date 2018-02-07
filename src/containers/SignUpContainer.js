import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import * as authActions from '../actions/auth';
import { getSignUpErrorMessage, isAuthDataLoaded } from '../selectors/auth';

import SignUp from '../components/Auth/SignUp';

const formName = 'SignUpForm';

const validateCreateAccount = values => {
  const errors = {};
  if (values.password && values.passwordConfirm !== values.password) {
    errors.passwordConfirm = 'Password does not match';
  }
  return errors;
};

const mapStateToProps = createStructuredSelector({
  errorMessage: getSignUpErrorMessage,
  loading: isAuthDataLoaded,
});

const signUpFormContainer = reduxForm({
  form: formName,
  validate: validateCreateAccount,
  onSubmit: (form, dispatch) => {
    const { email, password, fullName } = form;
    const isSignup = true;
    dispatch( authActions.auth( email, password, isSignup ));
  },
})(SignUp);

export default connect(mapStateToProps)(signUpFormContainer);
