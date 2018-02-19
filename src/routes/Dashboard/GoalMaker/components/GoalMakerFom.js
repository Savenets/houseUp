import React from 'react';
import PropTypes from 'prop-types';

import GoalMakerFormContent from './GoalMakerFormContent';
import GoalMakerForActions from './GoalMakerForActions';
import GoalList from './GoalList';

const GoalMakerFom = ({ handleSubmit, invalid, submitting, errorMessage, handleAddGoal, goals, handleRemove }) => (
  <form noValidate onSubmit={handleSubmit}>
    <GoalMakerFormContent handleAddGoal={handleAddGoal} />
    { goals &&  <GoalList handleRemove={handleRemove} goals={goals} />}
    <GoalMakerForActions
      submitting={submitting}
      invalid={invalid}
    />
  </form>
);

GoalMakerFom.defaultProps = {
  errorMessage: null,
  goals: null,
  handleRemove: null,
};

GoalMakerFom.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleAddGoal: PropTypes.func.isRequired,
  goals: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default GoalMakerFom;
