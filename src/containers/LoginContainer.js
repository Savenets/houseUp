import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { auth, db } from '../firebase';
import * as authActions from '../actions/auth';
import * as userActions from '../actions/user';
import { getAuthErrorMessage } from '../selectors/auth';

import Login from '../components/Auth/Login';

const formName = 'LoginForm';

const mapStateToProps = createStructuredSelector({
  errorMessage: getAuthErrorMessage,
});

const loginFormContainer = reduxForm({
  form: formName,
  onSubmit: async (form, dispatch) => {
    const { email, password } = form;
    try {
      const userAuth = await auth.doSignInWithEmailAndPassword(email, password);
      dispatch(authActions.authAuthenticate());
    } catch ({ message }) {
      dispatch(authActions.authError(message));
      console.log(message)
    }
  },
})(Login);

export default connect(mapStateToProps)(loginFormContainer);
