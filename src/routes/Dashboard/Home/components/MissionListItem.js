import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import MissionListActions from './MissionListActions';
import Tasks from './Tasks';
import { missionWrapper, missionName, description } from './MissionListItem.css';

const missionListItem = ({ mission }) => {

  return (
    <Paper className={missionWrapper} zDepth={4}>
      <h3 className={missionName}>{mission.missionName}</h3>
      <p className={description}>{mission.missionMakerDescription}</p>
      {mission.missions && <Tasks tasks={mission.missions} />}
      <MissionListActions />
    </Paper>
  );
};

missionListItem.propTypes = {
  mission: PropTypes.shape().isRequired,
};

export default missionListItem;
