import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppHeader from '../components/AppHeader/AppHeader';

class PageHeader extends Component {
  left = () => (
      // TODO redirect to dashboard if authenticated
      <Link to="/">
        POKE 2.0
      </Link>
  );

  right = () => [
    <a href="/signup" key="1">
      Sign up
    </a>,
    <a href="/signin" key="2">
      Sign in
    </a>,
  ];

  render() {
    return (
      <AppHeader
        leftPart={this.left()}
        rightPart={this.right()}
      />
    );
  }
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(PageHeader);
