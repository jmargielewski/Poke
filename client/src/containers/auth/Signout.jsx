import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { Col, Row } from '../layout/Grid';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h3 style={{ textAlign: 'center' }}>LOGOUT</h3>
          <p>You are now logged out.</p>
          <p>Click here to sign in.</p>
        </Col>
      </Row>
    );
  }
}

export default connect(null, actions)(Signout);
