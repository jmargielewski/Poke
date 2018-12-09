import React from 'react';

import Button from '../Button/Button';
import { Error } from '../Input/InputStyles';

const LoginForm = ({
  onSubmit,
  renderFormFields,
  handleSubmit,
  errorMessage,
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    {renderFormFields()}
    {errorMessage && <Error>{errorMessage}</Error>}
    <Button text="Sign In" />
  </form>
);

export default LoginForm;
