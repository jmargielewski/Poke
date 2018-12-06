// external
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// internals
import Root from './Root';
import App from './components/App';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <Root>
    <Fragment>
      <App />
      <GlobalStyle />
    </Fragment>
  </Root>,
  document.getElementById('root'),
);
