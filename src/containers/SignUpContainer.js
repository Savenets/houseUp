import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { auth, db } from '../firebase';
import * as authActions from '../actions/auth';
import { getAuthErrorMessage } from '../selectors/auth';

import SignUp from '../components/Auth/SignUp';

const formName = 'SignUpForm';

const mapStateToProps = createStructuredSelector({
  formValues: getFormValues(formName),
  errorMessage: getAuthErrorMessage,
});

const loginFormContainer = reduxForm({
  form: formName,
  onSubmit: async (fields, dispatch) => {
    const { email, password, fullName } = fields;
    try {
      const userAuth = await auth.doCreateUserWithEmailAndPassword(email, password);
      db.doCreateUser(userAuth.uid, fullName, email)
    } catch ({ message }) {
      dispatch(authActions.authError(message));
      console.log(message)
    }
  },
})(SignUp);

export default connect(mapStateToProps)(loginFormContainer);
