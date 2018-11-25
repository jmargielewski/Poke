import React from 'react';
import { Button as Btn } from './ButtonStyles';

const Button = ({
  icon,
  text,
  onClick,
  outlined,
}) => (
  <Btn
    outlined={outlined}
    onClick={onClick}
  >
    {text && <span>{text}</span>}
    {icon && <i>{icon}</i>}
  </Btn>
);

export default Button;
