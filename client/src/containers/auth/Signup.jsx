import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../../redux/actions';
import { registerFormFields } from './formFields';

import Input from '../../components/Input/Input';

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/dashboard');
    });
  };

  renderFormFields = () => (
    _.map(registerFormFields, ({ name, label, type }) => (
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
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h2>Sign Up Page</h2>
        <div><a href="auth/google">Sign in with Google</a></div>
        {this.renderFormFields()}
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
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
