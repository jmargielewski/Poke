import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { map } from 'lodash';

import * as actions from '../../redux/actions';
import { registerFormFields } from './formFields';

// components
import { Row, Col } from '../layout/Grid';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ButtonGoogle from '../../components/ButtonGoogle/ButtonGoogle';

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
    const { handleSubmit } = this.props;
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div>
            <h2>Sign Up Page</h2>
            <ButtonGoogle />
            <form onSubmit={handleSubmit(this.onSubmit)}>
              {this.renderFormFields()}
              <div>{this.props.errorMessage}</div>
              <Button text="Sign Up" />
            </form>
          </div>
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
