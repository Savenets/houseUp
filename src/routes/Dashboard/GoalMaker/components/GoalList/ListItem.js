import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/navigation/close';

import { itemWrapper, itemDescription, date, actions } from './ListItem.css';

const ListItem = ({ item, handleRemove }) => (
  <li className={itemWrapper}>
    <p className={itemDescription}>{item.goal}</p>
    <div className={actions}>
      <span className={date}>{moment(item.dueDate).format('MMM DD YYYY')}</span>
      <IconButton onClick={() => handleRemove(item.id)}>
        <RemoveIcon />
      </IconButton>
    </div>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ListItem;
