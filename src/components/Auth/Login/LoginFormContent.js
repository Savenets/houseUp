import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form';
import { ValidationErrorMessages as validation } from '../../../helpers/validation';

const LoginFormContent = () => {
  const fields = [
    {
      id: 'LoginEmailAddress',
      name: 'email',
      floatingLabelText: 'Email',
      type: 'email',
      validate:[validation.required, validation.validEmail],
      component: TextField,
    },
    {
      id: 'LoginFormPasswordField',
      name: 'password',
      floatingLabelText: 'Password',
      type: 'password',
      validate:[validation.required],
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

export default LoginFormContent;
