import styled from 'styled-components';
import {
  deepCerulean,
  smallShadow,
  hoverButtonShadow,
} from '../../constants/colors';

export const Button = styled.button`
  height: 40px;
  border-radius: 100px;
  background-color: ${deepCerulean};
  border: none;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: ${smallShadow};
  transition: box-shadow .218s;
  &:hover {
    box-shadow: ${hoverButtonShadow};
  }
  ${({ outlined }) => outlined && `
    background-image: none;
    background: transparent;
    border: 1px solid ${deepCerulean};
  `}
  span {
    font-size: 14px;
    text-align: center;
    color: #fff;
    ${({ outlined }) => outlined && `
      color: ${deepCerulean};
    `}
  }
  i {
    text-align: center;
  }
`;
