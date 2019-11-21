import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './../form-input/Form-input.component';
import { SignUpContainer, ButtonsContainer } from './SignUp.styles';
import Button from '../button/Button.component';

const SignUp = () => {
  const [userCredientials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const { displayName, email, password, passwordConfirm } = userCredientials;

  const handleChange = e => {
    setUserCredentials({
      ...userCredientials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userCredientials);
    setUserCredentials({
      displayName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });
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

export default SignUp;
