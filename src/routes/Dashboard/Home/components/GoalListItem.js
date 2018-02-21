import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { goalWrapper, goalName, description } from './GoalListItem.css';

const GoalListItem = ({ goal }) => {

  return (
    <Paper className={goalWrapper}>
      <h3 className={goalName}>{goal.goalName}</h3>
      <p className={description}>{goal.goalMakerDescription}</p>
    </Paper>
  );
};

GoalListItem.propTypes = {
  goal: PropTypes.shape().isRequired,
};

export default GoalListItem;
