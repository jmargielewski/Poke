import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { map } from 'lodash';

import * as actions from '../../redux/actions';
import { loginFormFields } from './formFields';
import { isRequire } from '../../utils/validation/validation';

// layout components
import { Col, Row } from '../layout/Grid';
import {
  AuthWrap,
  AuthHeader,
  AuhtHeaderTitle,
  AuthBody,
} from './authStyles';

// components
import Input from '../../components/Input/Input';
import LoginForm from '../../components/Forms/LoginForm';

class Signin extends Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/dashboard');
    });
  };

  renderFormFields = () => (
    map(loginFormFields, ({ name, label, type }) => (
      <Field
        key={name}
        name={name}
        type={type}
        label={label}
        component={Input}
        validate={[isRequire]}
        autoComplete="none"
      />
    ))
  );

  render() {
    const {
      onSubmit,
      renderFormFields,
      props: {
        handleSubmit,
        errorMessage,
      },
    } = this;

    const loginProps = {
      onSubmit,
      renderFormFields,
      handleSubmit,
      errorMessage,
    };

    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <AuthWrap>
            <AuthHeader>
              <AuhtHeaderTitle>Sign In Page</AuhtHeaderTitle>
            </AuthHeader>
            <AuthBody>
              <LoginForm {...loginProps} />
            </AuthBody>
          </AuthWrap>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' }),
)(Signin);
