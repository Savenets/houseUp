import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyles = {
  height: 56,
  margin: '16px 0',
};

const GoalMakerForActions = ({ invalid, submitting }) => {

  return (
    <div>
      <RaisedButton
        disabled={invalid || submitting}
        label="make a goal"
        type="submit"
        style={buttonStyles}
        fullWidth
        primary
      />
    </div>
  );
};

GoalMakerForActions.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default GoalMakerForActions;

