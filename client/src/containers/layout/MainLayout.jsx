import React, { PureComponent } from 'react';
import PageHeader from '../PageHeader';

class MainLayout extends PureComponent {
  render() {
    return (
      <div id="main-layout">
        <PageHeader />
        <div id="main-layout-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
