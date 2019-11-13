import React from 'react';
import { Auth, SignUpIn } from './Auth.styles';
import SignUp from './../../components/sign-up/SignUp.component';
import background from '../../assets/movie_background.jpg';

const AuthPage = () => {
  return (
    <Auth>
      <SignUpIn>
        <div
          style={{
            height: '100%',
            background: `url(${background}) `,
            backgroundSize: 'contain'
          }}
        ></div>
        <SignUp></SignUp>
      </SignUpIn>
    </Auth>
  );
};

export default AuthPage;
