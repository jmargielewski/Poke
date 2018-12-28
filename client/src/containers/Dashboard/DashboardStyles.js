import styled from 'styled-components';
import {
  sand,
  smallRadius,
  smallShadow,
  hoverButtonShadow,
} from '../../constants/colors';

export const Box = styled.div`
  height: 150px;
  padding: 1em 0;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: ${smallShadow};
  border-radius: ${smallRadius};
  &:hover{
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: ${hoverButtonShadow};
  }
`;

export const BoxTitle = styled.h4`
  padding-left: 1em;
  border-bottom: 1px solid ${sand};
`;
