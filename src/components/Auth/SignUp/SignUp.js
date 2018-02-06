import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import SignUpFormContent from './SignUpFormContent';
import SignUpFormActions from './SignUpFormActions';

import { paperContent, error } from './SignUp.css';

const paperStyle = {
  padding: '8px 16px 16px',
  maxWidth: 344,
};

const LoginForm = ({ handleSubmit, invalid, submitting, errorMessage }) => (
  <div className={paperContent}>
    <h1>Please fill out the form to register</h1>
    { errorMessage && <span className={error}>OLA-L-A-A L-A-AA! {errorMessage}</span> }
    <Paper style={paperStyle} zDepth={1}>
      <form noValidate onSubmit={handleSubmit}>
        <SignUpFormContent />
        <SignUpFormActions
          submitting={submitting}
          invalid={invalid}
        />
      </form>
    </Paper>
  </div>
);

LoginForm.defaultProps = {
  errorMessage: null,
};

LoginForm.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default LoginForm;
