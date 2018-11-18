import React from 'react';

const Input = ({ label, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} />
    <div>{touched && error}</div>
  </div>
);

export default Input;
