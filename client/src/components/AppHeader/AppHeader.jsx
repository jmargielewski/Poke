import React from 'react';
import {
  Header,
  Navigation,
  NavLeft,
  NavRight,
} from './AppHeaderStyles';

export default ({ leftPart, rightPart }) => (
  <Header>
    <Navigation>
      <NavLeft>{leftPart}</NavLeft>
      <NavRight>{rightPart}</NavRight>
    </Navigation>
  </Header>
);
