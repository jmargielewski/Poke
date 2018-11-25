import React, { PureComponent } from 'react';
import PageHeader from '../PageHeader';
import { Container } from './Grid';

class MainLayout extends PureComponent {
  render() {
    return (
      <div id="main-layout">
        <PageHeader />
        <Container id="main-layout-body">
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default MainLayout;
