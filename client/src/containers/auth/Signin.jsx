import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { map } from 'lodash';

import * as actions from '../../redux/actions';
import { loginFormFields } from './formFields';

// components
import { Col, Row } from '../layout/Grid';
import Input from '../../components/Input/Input';

class Signin extends Component {
  renderFormFields = () => (
    map(loginFormFields, ({ name, label, type }) => (
      <Field
        key={name}
        name={name}
        type={type}
        label={label}
        component={Input}
        autoComplete="none"
      />
    ))
  );

  render() {
    const { handleSubmit } = this.props;
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2>Sign In Page</h2>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            {this.renderFormFields()}
            <div>{this.props.errorMessage}</div>
            <button>Sign In!</button>
          </form>
        </Col>
      </Row>
    );
  }

  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/dashboard');
    });
  };
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' }),
)(Signin);
