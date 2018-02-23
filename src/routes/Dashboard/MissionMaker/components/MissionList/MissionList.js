import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { list } from './MissionList.css';

const missionMakerFom = ({ missions, handleRemove }) => (
  <ul className={list}>
    { missions.map((item, index) => <ListItem key={item.id} item={item} handleRemove={handleRemove} />)}
  </ul>
);

missionMakerFom.propTypes = {
  missions: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default missionMakerFom;
