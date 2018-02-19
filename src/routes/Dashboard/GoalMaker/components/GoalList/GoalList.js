import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { list } from './GoalList.css';

const GoalMakerFom = ({ goals, handleRemove }) => (
  <ul className={list}>
    { goals.map((item, index) => <ListItem key={item.id} item={item} handleRemove={handleRemove} />)}
  </ul>
);

GoalMakerFom.propTypes = {
  goals: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default GoalMakerFom;
