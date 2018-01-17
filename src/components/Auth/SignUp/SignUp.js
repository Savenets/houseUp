import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import LoginFormContent from './SignUpFormContent';
import LoginFormActions from './SignUpFormActions';

import { paperContent } from './SignUp.css';

const paperStyle = {
  padding: '8px 16px 16px',
  maxWidth: 524,
};

const LoginForm = ({ handleSubmit, invalid, submitting }) => (
  <div className={paperContent}>
    <h1>Please fill out the form to register</h1>
    <Paper style={paperStyle} zDepth={1}>
      <form noValidate onSubmit={handleSubmit}>
        <LoginFormContent />
        <LoginFormActions
          handleSubmit={handleSubmit}
          submitting={submitting}
          invalid={invalid}
        />
      </form>
    </Paper>
  </div>
);

LoginForm.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
