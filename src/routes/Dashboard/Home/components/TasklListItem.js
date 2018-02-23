import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import { taskWrapper, taskName, dueDate, enumeration } from './TasklListItem.css';

const TasklListItem = ({ task, order }) => {

  return (
    <div className={taskWrapper}>
      <p className={taskName}>
        <span className={enumeration}>{order}</span>{task.mission}
      </p>
      <span className={dueDate}>Due date: {moment(task.dueDate).format('MMM DD YYYY')}</span>
    </div>
  );
};

TasklListItem.propTypes = {
  task: PropTypes.shape().isRequired,
  order: PropTypes.number.isRequired,
};

export default TasklListItem;
