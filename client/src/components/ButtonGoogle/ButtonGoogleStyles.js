import styled from 'styled-components';
import {
  smallShadow,
  deepCerulean,
  deepCeruleanActive,
  hoverButtonShadow,
} from '../../constants/colors';

export const GoogleButton = styled.div`
  border-radius: 1px;
  box-shadow: ${smallShadow};
  transition: background-color .218s,border-color .218s,box-shadow .218s;
  cursor: pointer;
  outline: none;
  position: relative;
  vertical-align: middle;
  max-width: 240px;
  background-color: ${deepCerulean};
  border: none;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  &:hover {
    box-shadow: ${hoverButtonShadow};
  }
  &:active {
    background-color: ${deepCeruleanActive};
  }
`;

export const GoogleButtonWrap = styled.div`
  border: 1px solid transparent;
`;

export const GoogleButtonIconWrap = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 1px;
  float: left;
`;

export const GoogleButtonIcon = styled.div`
  width: 18px;
  height: 18px;
`;

export const GoogleButtonContent = styled.span`
  display: inline-block;
  line-height: 48px;
`;
