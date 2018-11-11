import React from 'react';
import BEMHelper from 'react-bem-helper';

import './appHeader.scss';

const bem = BEMHelper('app-header');

export default ({ leftPart, rightPart }) => (
  <header {...bem()}>
    <nav {...bem('container')}>
      <div {...bem('left')}>{leftPart}</div>
      <div {...bem('right')}>{rightPart}</div>
    </nav>
  </header>
);
