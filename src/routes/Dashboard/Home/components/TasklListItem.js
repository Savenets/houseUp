import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { goalWrapper, goalName, description } from './GoalListItem.css';

const TasklListItem = ({ task }) => {

  return (
    <div className={taskWrapper}>
      <h3 className={taskName}>{task.title}</h3>
      <p className={description}>{task.dueDate}</p>
    </div>
  );
};

TasklListItem.propTypes = {
  task: PropTypes.shape().isRequired,
};

export default TasklListItem;
