import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import Test from './components/test';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Documentation from './components/Documentation';

const store = createStore(rootReducer, this.state, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path={'/'} component={Main}>
            <IndexRoute component={Home} />
            <Route path={'about'} component={About} />
            <Route path={'docs'} component={Documentation} />
            <Route path={'test'} component={Test} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
