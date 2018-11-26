import React from 'react';
import Button from '../Button/Button';

const LoginForm = ({
  onSubmit,
  renderFormFields,
  handleSubmit,
  errorMessage,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderFormFields()}
      <div>{errorMessage}</div>
      <Button text="Sign In" />
    </form>
  );
};

export default LoginForm;
