import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Menu from './components/Main';
import About from './components/About';
import Documentation from './components/Documentation';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Menu} />
        <Route path={'about'} component={About} />
        <Route path={'docs'} component={Documentation} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
