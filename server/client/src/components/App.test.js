import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('main render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('App Hello');

  ReactDOM.unmountComponentAtNode(div);
});
