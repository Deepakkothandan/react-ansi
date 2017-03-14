import React, { Component } from 'react';
import { IndexLink } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma logo"
              />
            </a>
            <IndexLink
              className="nav-item is-tab is-hidden-mobile"
              activeClassName="is-active"
              to="/"
            >
              Home
            </IndexLink>
            <IndexLink
              className="nav-item is-tab is-hidden-mobile"
              activeClassName="is-active"
              to="/docs"
            >
              Documentaion
            </IndexLink>
            <IndexLink
              className="nav-item is-tab is-hidden-mobile"
              activeClassName="is-active"
              to="/about"
            >
              About
            </IndexLink>
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
