import React from 'react';
import PropTypes from 'prop-types';
import TasklListItem from './TasklListItem';

import { tasksListWrapper } from './GoalsList.css';

const Tasks = ({ tasks }) => {

  return (
    <div className={tasksListWrapper}>
      {tasks.map((task, index) => <TasklListItem key={index} task={task} />)}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.shape().isRequired,
};

export default Tasks;
