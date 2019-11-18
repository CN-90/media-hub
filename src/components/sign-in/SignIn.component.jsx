import React from 'react';
import { Link } from 'react-router-dom';
import { SignInContainer, ButtonsContainer } from './SignIn.styles';
import FormInput from './../form-input/Form-input.component';
import Button from './../button/Button.component';

const SignIn = () => {
  return (
    <SignInContainer>
      <h1>Have an Account?</h1>
      <p>Sign in Below</p>
      <FormInput label="Email" />
      <FormInput label="Password" type="password" />
      <p style={{ paddingTop: '10px' }}>
        <Link to="/signup">No Account? Click Here to Sign Up.</Link>
      </p>
      <ButtonsContainer>
        <Button>Sign In</Button>
        <Button isGoogle>Sign In With Google</Button>
      </ButtonsContainer>
    </SignInContainer>
  );
};

export default SignIn;
