import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form';
import { ValidationErrorMessages as validation } from '../../../helpers/validation';

const SignUpFormContent = () => {
  const fields = [
    {
      id: 'SignUpFullName',
      name: 'fullName',
      floatingLabelText: 'Full Name',
      type: 'text',
      validate:[validation.required],
      component: TextField,
    },
    {
      id: 'SignUpEmailAddress',
      name: 'email',
      floatingLabelText: 'Email',
      validate:[validation.required, validation.validEmail],
      type: 'email',

      component: TextField,
    },
    {
      id: 'SignUpFormPasswordField',
      name: 'password',
      floatingLabelText: 'Password',
      type: 'password',
      validate:[validation.required],
      component: TextField,
    },
    {
      id: 'SignUpPasswordFieldConfirm',
      name: 'passwordConfirm',
      floatingLabelText: 'Confirm Password',
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

export default SignUpFormContent;
