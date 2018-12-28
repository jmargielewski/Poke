import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PageHeader from '../PageHeader';
import { Container } from './Grid';
import { oceanGradient } from '../../constants/colors';

// TODO: remove styles
const Hero = styled.div`
  background-image: ${oceanGradient};
  height: 250px;
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  z-index: -1;
`;

class MainLayout extends PureComponent {
  render() {
    return (
      <div id="main-layout">
        <PageHeader />
        <Hero />
        <Container id="main-layout-body">
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default MainLayout;
