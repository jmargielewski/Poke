import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
  padding: 1rem;
  box-shadow: 2px 2px 20px -5px #a9a9a9;
  &:after{
    content: '';
    display: inline-block;;
    clear: both;
  }
  .logo-box{
    float: left;
  }
  ul{
  padding: 0;
  margin: 0;
  float: right;
    li{
      list-style: none;
    }
  }
`;

export default () => (
  <Navigation>
    <div className="logo-box">
      <span role="img">🚀🚀🚀</span>
    </div>
    <ul>
      <li><a href="/auth/google">Sign in</a></li>
    </ul>
  </Navigation>
);
