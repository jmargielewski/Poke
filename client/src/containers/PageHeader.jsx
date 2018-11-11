import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppHeader from '../components/AppHeader/AppHeader';

class PageHeader extends Component {
  left = () => (
    <Link to="/dashboard">
      POKE 2.0
    </Link>
  );

  right = () => {
    if (this.props.authenticated) {
      return (
        <Fragment>
          <Link style={{ paddingRight: 25 }} to="/dashboard">Dashboard</Link>
          <Link style={{ paddingRight: 25 }} to="/signout">Sign Out</Link>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Link style={{ paddingRight: 25 }} to="/signup">Sign Up</Link>
        <Link style={{ paddingRight: 25 }} to="/signin">Sign In</Link>
      </Fragment>
    );
  };

  render() {
    return (
      <AppHeader
        leftPart={this.left()}
        rightPart={this.right()}
      />
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(PageHeader);
