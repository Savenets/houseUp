import React from 'react';
import PropTypes from 'prop-types';
import MissionListItem from './MissionListItem';

import { missionsListWrapper } from './MissionsList.css';

const missionsList = ({ missions }) => {

  return (
    <div className={missionsListWrapper}>
      {missions.map((mission, index) => <MissionListItem key={index} mission={mission} />)}
    </div>
  );
};

missionsList.propTypes = {
  missions: PropTypes.array.isRequired,
};

export default missionsList;
