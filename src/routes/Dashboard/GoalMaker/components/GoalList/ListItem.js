import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/navigation/close';

import { itemWrapper, itemDescription } from './ListItem.css';

const ListItem = ({ item, handleRemove }) => (
  <li className={itemWrapper}>
    <p className={itemDescription}>{item.goal}</p>
    <IconButton onClick={() => handleRemove(item.id)}>
      <RemoveIcon />
    </IconButton>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ListItem;
