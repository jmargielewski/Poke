import React from 'react';

import Button from '../Button/Button';
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
    {errorMessage && <div>{errorMessage}</div>}
    <Button text="Sign Up" />
  </form>
);

export default RegistrationForm;
