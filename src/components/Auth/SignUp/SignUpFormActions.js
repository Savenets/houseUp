import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyles = {
  height: 56,
  margin: '16px 0',
};

const SignUpFormActions = ({ invalid, submitting }) => {

  return (
    <div>
      <RaisedButton
        disabled={invalid || submitting}
        label="Sign Up"
        type="submit"
        style={buttonStyles}
        fullWidth
        primary
      />
    </div>
  );
};

SignUpFormActions.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SignUpFormActions;

