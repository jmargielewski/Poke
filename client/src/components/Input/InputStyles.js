import styled from 'styled-components';
import {
  tundra,
  codGray,
  mineShaft,
  shaft,
  brightRed,
  brightPink,
} from '../../constants/colors';

const InputWrap = styled.div`
  background-color: #fff; {/*${({ error }) => error ? brightPink : '#fff'};*/}
  width: 100%;
  height: 60px;
  border: 2px solid ${mineShaft};
  border-bottom-color: ${({ error }) => error ? brightRed : mineShaft};
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
  top: 21px;
  left: 20px;
  transition: all 0.30s;
  text-transform: none;
`;

const Input = styled.input`
  color: ${tundra};
  background: transparent;
  width:100%;
  height:100%;
  font-size: 16px;
  border: none;
  outline: none;
  padding-top: 10px;
  position: relative;
  z-index: 1;
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

const Error = styled.p`
  color: ${brightRed};
  padding-top: 5px;
  font-size: 13px;
`;

export {
  InputWrap,
  Input,
  Label,
  Error,
};
