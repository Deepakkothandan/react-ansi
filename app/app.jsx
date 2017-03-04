import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Main';

ReactDOM.render(
  <Menu />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
