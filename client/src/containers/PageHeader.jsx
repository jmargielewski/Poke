import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppHeader from '../components/AppHeader/AppHeader';

class PageHeader extends Component {
  left = () => (
      <Link to="/">
        POKE 2.0
      </Link>
  );

  right = () => [
    <a href="/auth/google" key="1">
      Sign In with Google
    </a>,
    <a href="/api/logout" key="2">
      Logout
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
