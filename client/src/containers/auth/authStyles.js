import styled, { keyframes } from 'styled-components';
import { deepCerulean, smallShadow } from '../../constants/colors';

const fallingDown = keyframes`
  0% {
    margin-top: -100px;
    opacity: .75;
  }
  50% {
    margin-top: 60px;
  }
  75% {
    margin-top: 48px;
  }
  100% {
    margin-top: 50px;
    opacity: 1;
  }
`;

const AuthWrap = styled.div`
  width: 400px;
  background: #fff;
  margin: 50px auto;
  box-shadow: ${smallShadow};
  animation: ${fallingDown} 1s ease-out 1;
`;

const AuthHeader = styled.div`
  background: ${deepCerulean};
  padding: 50px;
`;

const AuhtHeaderTitle = styled.h2`
  color: #fff;
  font-weight: 300;
`;

const AuthBody = styled.div`
  padding: 50px;
`;

export {
  AuthWrap,
  AuthHeader,
  AuhtHeaderTitle,
  AuthBody,
};
