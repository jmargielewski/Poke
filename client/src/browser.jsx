// external
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// internals
import store from './redux/store';
import App from './components/App';

require('./styles/main.scss');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
