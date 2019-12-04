import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './../form-input/Form-input.component';
import { SignUpContainer, ButtonsContainer } from './SignUp.styles';
import Button from '../button/Button.component';
import { connect } from 'react-redux';
import { SignUpThroughEmail } from '../../redux/user/user.actions';

const SignUp = ({ SignUpThroughEmail }) => {
  const [userCredientials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const { displayName, email, password, passwordConfirm } = userCredientials;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredientials,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('Passwords must match.');
      return;
    }

    if (password.length < 6) {
      alert('Passwords must be at least 6 characters long.');
      return;
    }

    SignUpThroughEmail(email, password, { displayName });
  };
  return (
    <SignUpContainer onSubmit={handleSubmit}>
      <h1>Don't have an account?</h1>
      <p>Sign up with email and password</p>
      <FormInput
        onChange={handleChange}
        name="displayName"
        value={displayName}
        label="Display Name"
        type="text"
      />
      <FormInput
        onChange={handleChange}
        name="email"
        value={email}
        label="Email"
        type="email"
      />
      <FormInput
        onChange={handleChange}
        name="password"
        value={password}
        label="Password"
        type="password"
      />
      <FormInput
        onChange={handleChange}
        name="passwordConfirm"
        value={passwordConfirm}
        label="Confirm Password"
        type="password"
      />
      <p style={{ paddingTop: '20px' }}>
        <Link to="/signin">Have an Account? Click here to sign in.</Link>
      </p>
      <ButtonsContainer>
        <Button>Sign Up</Button>
      </ButtonsContainer>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  SignUpThroughEmail: (email, password, additionalData) =>
    dispatch(SignUpThroughEmail(email, password, additionalData))
});

export default connect(null, mapDispatchToProps)(SignUp);
