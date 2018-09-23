import React, { PureComponent } from 'react';
import Header from '../../components/Header';

class MainLayout extends PureComponent {
  render() {
    return (
      <div id="main-layout">
        <Header /> {/*  TODO pass authenticated props */}
        <div id="main-layout-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
