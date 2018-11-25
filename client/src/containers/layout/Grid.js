import React from 'react';
import styled from 'styled-components';

const getWidthStrings = (span) => {
  if (!span) return;

  return `width: ${span / 12 * 100}%;`;
};

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
`;

const Row = styled.div`
  &::after {
  content: "";
  clear: both;
  display: table;
  }
`;

const Col = styled.div`
  float: left;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid red;
  
  ${({ xs }) => xs ? getWidthStrings(xs) : 'width: 100%'}
  
  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthStrings(sm)};
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthStrings(md)};
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthStrings(lg)};
  }
`;

export { Container, Row, Col };
