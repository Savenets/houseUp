import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidationErrorMessages as validation } from '../../../../helpers/validation';

import { goalAddWrapper } from './GoalMakerFormContent.css';

const styles = {
  goalsItemStyle: {
    minWidth: 486
  },
  buttonStyles: {
    height: 56,
    margin: '16px 0',
  },
};


const GoalMakerFormContent = ({ handleAddGoal }) => (
  <div>
    <div >
      <Field
        id="goalName"
        name="goalName"
        floatingLabelText="Lets make it a goal Title"
        type="text"
        fullWidth
        validate={[validation.required]}
        component={TextField}
      />
      <Field
        id="goalMakerDescription"
        name="goalMakerDescription"
        floatingLabelText="Descriptions"
        multiLine
        fullWidth
        style={{textAlign: 'left'}}
        validate={[validation.required]}
        type="text"
        component={TextField}
      />
    </div>
    <div className={goalAddWrapper}>
      <Field
        id="goalsItemsAdd"
        name="goalsItemsAdd"
        floatingLabelText="Add Goal"
        type="text"
        style={styles.goalsItemStyle}
        component={TextField}
      />
      <RaisedButton
        label="add item to list"
        type="button"
        style={styles.buttonStyles}
        onClick={handleAddGoal}
        primary
      />
    </div>
  </div>
);

GoalMakerFormContent.propTypes = {
  handleAddGoal: PropTypes.func.isRequired,
};


export default GoalMakerFormContent;
