import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import { noMissoinWarning, noMisionDescription, button } from './AddMission.css';

const AddMission = () => {

  return (
    <div className={noMissoinWarning} >
      <h2 className={noMisionDescription}>You do not have any mission (goal) add one </h2>
      <Link to="/dashboard/mission-maker">
        <RaisedButton
          className={button}
          label="Add Mission"
          type="button"
          primary
        />
      </Link>
    </div>
  );
};

export default AddMission;
