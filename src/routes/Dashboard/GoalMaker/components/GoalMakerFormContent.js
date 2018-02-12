import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form';
import { ValidationErrorMessages as validation } from '../../../../helpers/validation';

const GoalMakerFormContent = () => {
  const fields = [
    {
      id: 'goalName',
      name: 'goalName',
      floatingLabelText: 'Lets make it a goal Title',
      type: 'text',
      validate:[validation.required],
      component: TextField,
    },
    {
      id: 'goalMakerDescription',
      name: 'goalMakerDescription',
      floatingLabelText: 'Descriptions',
      multiLine: true,
      style: {textAlign: 'left'},
      validate:[validation.required],
      type: 'text',
      component: TextField,
    },

  ];

  return (
    <div>
      {
        fields.map(field => {
          return (
            <Field
              key={field.name}
              fullWidth
              {...field}
            />
          );
        })
      }
    </div>
  );
};

export default GoalMakerFormContent;
