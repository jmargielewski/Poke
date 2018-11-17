// external
import React from 'react';
import ReactDOM from 'react-dom';

// internals
import App from './components/App';
import Root from './Root';

require('./styles/main.scss');

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root'),
);
