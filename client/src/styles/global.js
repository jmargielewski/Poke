import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Nunito Sans', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
