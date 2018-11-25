import React from 'react';

import Button from '../Button/Button';
import ButtonGoogle from '../ButtonGoogle/ButtonGoogle';

const RegistrationForm = ({
  handleSubmit,
  renderFormFields,
  onSubmit,
  errorMessage,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ButtonGoogle />
      {renderFormFields()}
      <div>{errorMessage}</div>
      <Button text="Sign Up" />
    </form>
  );
};

export default RegistrationForm;
