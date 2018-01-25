import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form';


const LoginFormContent = () => {
  const fields = [
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