import React from 'react';
import PropTypes from 'prop-types';

import GoalMakerFormContent from './GoalMakerFormContent';
import GoalMakerForActions from './GoalMakerForActions';
import GoalList from './GoalList';
import Spinner from '../../../../components/Spinner';

const GoalMakerFom = ({ handleSubmit, invalid, submitting, errorMessage, handleAddGoal, goals, handleRemove, loading, disabled }) => (
  <form noValidate onSubmit={handleSubmit}>
    {console.log(disabled)}
    <GoalMakerFormContent disabled={disabled} handleAddGoal={handleAddGoal} />
    { goals &&  <GoalList handleRemove={handleRemove} goals={goals} />}
    <GoalMakerForActions
      submitting={submitting}
      invalid={invalid}
    />
    {loading && <Spinner />}
  </form>
);

GoalMakerFom.defaultProps = {
  errorMessage: null,
  goals: null,
  handleRemove: null,
  loading: false,
  disabled: true,
};

GoalMakerFom.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleAddGoal: PropTypes.func.isRequired,
  goals: PropTypes.array,
  handleRemove: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default GoalMakerFom;
