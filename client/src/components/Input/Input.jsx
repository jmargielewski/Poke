import React from 'react';
import {
  InputWrap,
  Input as Inp,
  Label,
  Error,
} from './InputStyles';

const Input = ({
  label,
  input,
  meta: {
    touched,
    error,
  },
}) => (
  <InputWrap error={touched && error}>
    <Inp {...input} />
    <Label>{label}</Label>
    {(touched && error) && <Error>{error}</Error>}
  </InputWrap>
);

export default Input;
