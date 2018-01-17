import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { auth } from '../firebase';

import SignUp from '../components/Auth/SignUp';


const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => {
  return {
   aad(){
     console.log('dfe')
   }
  };
};

const loginFormContainer = reduxForm({
  form: 'SignUpForm',
  onSubmit: async ({ email, password }, dispatch) => {
    try {
      //await FormHelper.submit(AuthActions.login(email, password), dispatch);
    } catch ({ message }) {
      //FormErrorHelper.handleError(message, dispatch, 'Incorrect credentials');
    }
  },
})(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(loginFormContainer);
