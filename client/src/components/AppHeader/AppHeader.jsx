import React from 'react';
import BEMHelper from 'react-bem-helper';
import { Header } from './AppHeaderStyles';

import './appHeader.scss';

const bem = BEMHelper('app-header');

export default ({ leftPart, rightPart }) => (
  <Header>
    <nav {...bem('container')}>
      <div {...bem('left')}>{leftPart}</div>
      <div {...bem('right')}>{rightPart}</div>
    </nav>
  </Header>
);
