import React from 'react';
import FormInput from './../form-input/Form-input.component';
import { SignUpContainer } from './SignUp.styles';

const SignUp = () => {
  return (
    <SignUpContainer>
      <h1>Don't have an account?</h1>
      <p>Sign up with email and password</p>
      <FormInput />
    </SignUpContainer>
  );
};

export default SignUp;
