import React from 'react';
import { InputWrap, Input as Inp, Label } from './InputStyles';

const Input = ({
  label,
  input,
  meta: {
    touched,
    error,
  },
}) => (
  <InputWrap>
    <Inp {...input} />
    <Label>{label}</Label>
    <div>{touched && error}</div>
  </InputWrap>
);

export default Input;
