import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from './../form-input/Form-input.component';
import { SignUpContainer, ButtonsContainer } from './SignUp.styles';
import Button from '../button/Button.component';

const SignUp = () => {
  return (
    <SignUpContainer>
      <h1>Don't have an account?</h1>
      <p>Sign up with email and password</p>
      <FormInput label="Display Name" />
      <FormInput label="Email" />
      <FormInput label="Password" type="password" />
      <FormInput label="Confirm Password" type="password" />
      <p style={{ paddingTop: '10px' }}>
        <Link to="/signin">Have an Account? Click here to sign in.</Link>
      </p>
      <ButtonsContainer>
        <Button>Sign Up</Button>
      </ButtonsContainer>
    </SignUpContainer>
  );
};

export default SignUp;
