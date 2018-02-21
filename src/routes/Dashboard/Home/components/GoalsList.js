import React from 'react';
import PropTypes from 'prop-types';
import GoalListItem from './GoalListItem';

import { goalsListWrapper } from './GoalsList.css';

const GoalsList = ({ goals }) => {

  return (
    <div className={goalsListWrapper}>
      {goals.map((goal, index) => <GoalListItem key={index} goal={goal} />)}
    </div>
  );
};

GoalsList.propTypes = {
  goals: PropTypes.shape().isRequired,
};

export default GoalsList;
