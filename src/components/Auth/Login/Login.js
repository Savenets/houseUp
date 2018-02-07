import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import Spinner from '../../../components/Spinner';
import LoginFormContent from './LoginFormContent';
import LoginFormActions from './LoginFormActions';

import { paperContent, error } from './Login.css';

const paperStyle = {
  padding: '8px 16px 16px',
  maxWidth: 344,
};

const LoginForm = ({ handleSubmit, invalid, submitting, loading, errorMessage }) => (
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
    {loading && <Spinner />}
  </div>
);

LoginForm.defaultProps = {
  errorMessage: null,
};

LoginForm.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
