import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import LoginFormContent from './LoginFormContent';
import LoginFormActions from './LoginFormActions';

import { paperContent, error } from './Login.css';

const paperStyle = {
  padding: '8px 16px 16px',
  maxWidth: 344,
};

const LoginForm = ({ handleSubmit, invalid, submitting, errorMessage }) => (
  <div className={paperContent}>
    <h1>Log in</h1>
    { errorMessage && <span className={error}> ERROR: {errorMessage}</span> }
    <Paper style={paperStyle} zDepth={1}>
      <form noValidate onSubmit={handleSubmit}>
        <LoginFormContent />
        <LoginFormActions
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
