import React, { Component } from 'react';
import { Col, Row } from '../containers/layout/Grid';

class Dashboard extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2 style={{ textAlign: 'center' }}>Dashboard</h2>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
