import React from 'react';
import TextField from 'material-ui/TextField';
import { Field } from 'redux-form';

const SignUpFormContent = () => {
  const fields = [
    {
      id: 'SignUpFullName',
      name: 'fullName',
      floatingLabelText: 'Full Name',
      type: 'text',
      component: TextField,
    },
    {
      id: 'SignUpEmailAddress',
      name: 'email',
      floatingLabelText: 'Email',
      type: 'email',
      component: TextField,
    },
    {
      id: 'SignUpFormPasswordField',
      name: 'password',
      floatingLabelText: 'Password',
      type: 'password',
      component: TextField,
    },
    {
      id: 'SignUpPasswordFieldConfirm',
      name: 'password',
      floatingLabelText: 'Password',
      type: 'password',
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
