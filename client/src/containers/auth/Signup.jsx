import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { map } from 'lodash';

import * as actions from '../../redux/actions';
import { registerFormFields } from './formFields';

// layout component
import { Row, Col } from '../layout/Grid';
import {
  AuthWrap,
  AuthHeader,
  AuhtHeaderTitle,
  AuthBody,
} from './authStyles';

// components
import Input from '../../components/Input/Input';
import RegistrationForm from '../../components/Forms/RegistrationForm';


class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/dashboard');
    });
  };

  renderFormFields = () => (
    map(registerFormFields, ({ name, label, type }) => (
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
    const {
      onSubmit,
      renderFormFields,
      props: {
        handleSubmit,
        errorMessage,
      },
    } = this;

    const registrationProps = {
      handleSubmit,
      errorMessage,
      onSubmit,
      renderFormFields,
    };

    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <AuthWrap>
            <AuthHeader>
              <AuhtHeaderTitle>Sign Up Page</AuhtHeaderTitle>
            </AuthHeader>
            <AuthBody>
              <RegistrationForm {...registrationProps} />
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
  reduxForm({ form: 'signup' }),
)(Signup);
