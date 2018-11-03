import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppHeader from '../components/AppHeader/AppHeader';

class PageHeader extends Component {
  left = () => (
      <Link to="/">
        POKE 2.0
      </Link>
  );

  right = () => [
    <Link to="/auth/google">
      Sign In with Google
    </Link>,
    <Link to="/api/logout">
      Logout
    </Link>,
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
