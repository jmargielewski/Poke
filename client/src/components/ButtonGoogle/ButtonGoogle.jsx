import React from 'react';
import GoogleIcon from './GoogleIcon';
import {
  GoogleButton,
  GoogleButtonWrap,
  GoogleButtonIcon,
  GoogleButtonIconWrap,
  GoogleButtonContent,
} from './ButtonGoogleStyles';

const ButtonGoogle = () => (
  <GoogleButton>
    <GoogleButtonWrap>
      <GoogleButtonIconWrap>
        <GoogleButtonIcon>
          <GoogleIcon />
        </GoogleButtonIcon>
      </GoogleButtonIconWrap>
      <GoogleButtonContent>
        <a href="auth/google">Sign in with Google</a>
      </GoogleButtonContent>
    </GoogleButtonWrap>
  </GoogleButton>
);

export default ButtonGoogle;
