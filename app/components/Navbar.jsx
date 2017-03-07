import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </a>
            <a className="nav-item is-tab is-hidden-mobile is-active" href="/">Home</a>
            <a className="nav-item is-tab is-hidden-mobile" href="/docs">Documention</a>
            <a className="nav-item is-tab is-hidden-mobile" href="/about">About</a>
          </div>
          <div className="nav-center">
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
