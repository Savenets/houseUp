import React from 'react';
import PropTypes from 'prop-types';

import GoalMakerFormContent from './GoalMakerFormContent';
import GoalMakerForActions from './GoalMakerForActions';

const GoalMakerFom = ({ handleSubmit, invalid, submitting, loading, errorMessage }) => (
  <form noValidate onSubmit={handleSubmit}>
    <GoalMakerFormContent />
    <GoalMakerForActions
      submitting={submitting}
      invalid={invalid}
    />
  </form>
);

GoalMakerFom.defaultProps = {
  errorMessage: null,
};

GoalMakerFom.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default GoalMakerFom;
