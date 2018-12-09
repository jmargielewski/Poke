import React from 'react';

import Button from '../Button/Button';
import { Error } from '../Input/InputStyles';
import ButtonGoogle from '../ButtonGoogle/ButtonGoogle';

const RegistrationForm = ({
  handleSubmit,
  renderFormFields,
  onSubmit,
  errorMessage,
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <ButtonGoogle />
    {renderFormFields()}
    {errorMessage && <Error>{errorMessage}</Error>}
    <Button text="Sign Up" />
  </form>
);

export default RegistrationForm;
