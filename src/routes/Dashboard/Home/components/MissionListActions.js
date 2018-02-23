import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import { actionsWrapper, button } from './MissionListActions.css';

const missionListActions = ({ handleEdit, handleRemove }) => {

  return (
    <div className={actionsWrapper}>
      <RaisedButton
        className={button}
        label="Edit"
        type="button"
        onClick={handleEdit}
        primary
      />
      <RaisedButton
        className={button}
        label="Remove"
        type="button"
        onClick={handleRemove}
        primary
      />
    </div>
  );
};

missionListActions.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default missionListActions;
