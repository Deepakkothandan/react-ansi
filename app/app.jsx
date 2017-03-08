import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from './components/Main';
import Vagrant from './components/Vagrant';
import About from './components/About';
import Documentation from './components/Documentation';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Main}>
          <IndexRoute component={Vagrant} />
          <Route path={'about'} component={About} />
          <Route path={'docs'} component={Documentation} />
        </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
