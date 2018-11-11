import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <div>
        LOGOUT<br/><br/>
        You are now logged out.
        Click here to sign in.
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
