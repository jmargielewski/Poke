import styled from 'styled-components';
import {
  tundra,
  codGray,
  mineShaft,
  shaft,
  firebrick,
} from '../../constants/colors';

const InputWrap = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;
  border: 2px solid;
  border-color: ${({ error }) => error ? firebrick : mineShaft};
  border-radius: 2px;
  padding: 9px 20px 2px;
  margin-bottom: 30px;
  display: inline-block;
  position: relative;
`;

const Label = styled.label`
  color: ${codGray};
  font-size: 16px;
  position: absolute;
  top: 10px;
  left: 20px;
  transform: translateY(7px);
  transition: all 0.30s;
  text-transform: none;
`;

const Input = styled.input`
  color: ${tundra};
  width:100%;
  height:100%;
  font-size: 16px;
  border: none;
  outline: none;
  padding-top: 10px;
  & ~ ${Label} {
    ${({ value }) => value && {
    fontSize: '12px',
    color: `${shaft}`,
    top: '9px',
    transform: 'translateY(0)',
  }}
  }
  &:focus ~ ${Label} {
    font-size: 12px;
    color: ${shaft};
    top: 9px;
    transform: translateY(0);
  }
`;

const Error = styled.div`
  color: ${firebrick};
  padding-top: 5px;
  margin-left: -20px;
  font-size: 12px;
`;

export {
  InputWrap,
  Input,
  Label,
  Error,
};
