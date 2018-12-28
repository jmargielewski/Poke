import React, { Component } from 'react';
import { Col, Row } from '../layout/Grid';
import { Box, BoxTitle } from './DashboardStyles';
import data from './dataMock';

// TODO: create headers components

class Dashboard extends Component {
  renderBoxes = () => (
    data.map(box => (
      <Col xs={12} sm={12} md={4} lg={4} key={box.id}>
        <Box>
          <BoxTitle>{box.title}</BoxTitle>
        </Box>
      </Col>
    ))
  );

  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2 style={{ textAlign: 'center', padding: '20px 0', color: '#fff' }}>Dashboard</h2>
        </Col>
        {this.renderBoxes()}
      </Row>
    );
  }
}

export default Dashboard;
