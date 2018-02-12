import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { getSignUpErrorMessage, isAuthDataLoaded } from '../../../../selectors/auth';

import GoalMakerFom from '../components/GoalMakerFom';

const formName = 'GoalMakerFom';

const mapStateToProps = createStructuredSelector({
  errorMessage: getSignUpErrorMessage,
  loading: isAuthDataLoaded,
});

const GoalMakerFormContainer = reduxForm({
  form: formName,
  onSubmit: (form, dispatch) => {
   /* const { email, password, fullName } = form;
    const isSignup = true;
    dispatch( authActions.auth( email, password, isSignup ));*/
  },
})(GoalMakerFom);

export default connect(mapStateToProps)(GoalMakerFormContainer);
