import React from 'react';
import PropTypes from 'prop-types';
import { TextField, DatePicker } from 'redux-form-material-ui';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidationErrorMessages as validation } from '../../../../helpers/validation';

import { missionAddWrapper } from './MissionMakerFormContent.css';

const styles = {
  missionsItemStyle: {
    minWidth: '60%',
  },
  buttonStyles: {
    height: 56,
    margin: '16px 0',
  },
};

const missionMakerFormContent = ({ handleAddmission, disabled }) => (
  <div>
    <div >
      <Field
        id="missionName"
        name="missionName"
        floatingLabelText="Lets make it a mission Title"
        type="text"
        fullWidth
        validate={[validation.required]}
        component={TextField}
      />
      <Field
        id="missionMakerDescription"
        name="missionMakerDescription"
        floatingLabelText="Descriptions"
        multiLine
        fullWidth
        style={{textAlign: 'left'}}
        validate={[validation.required]}
        type="text"
        component={TextField}
      />
    </div>
    <div className={missionAddWrapper}>
      <Field
        id="missionsItemsAdd"
        name="missionsItemsAdd"
        floatingLabelText="Add mission"
        style={styles.missionsItemStyle}
        component={TextField}
      />
      <Field
        id="missionDate"
        name="missionDate"
        type="text"
        autoOk
        minDate={new Date()}
        floatingLabelText="Due Date"
        format={null}
        component={DatePicker}
      />
      <RaisedButton
        label="add item to list"
        type="button"
        style={styles.buttonStyles}
        onClick={handleAddmission}
        disabled={disabled}
        primary
      />
    </div>
  </div>
);

missionMakerFormContent.propTypes = {
  handleAddmission: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default missionMakerFormContent;
