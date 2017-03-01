import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';

ReactDOM.render(
  <Menu />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
