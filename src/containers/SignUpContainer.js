import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import * as authActions from '../actions/auth';
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
    const isSignup = true;
    dispatch( authActions.auth( email, password, isSignup ));
  },
})(SignUp);

export default connect(mapStateToProps)(loginFormContainer);


/*
const mapDispatchToProps = dispatch => {
  return {
    onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
    onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
  };
};*/
