import React, { Component } from 'react';
import Navbar from './Navbar';
import Vagrant from './Vagrant';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Navbar />
        <br />
        <div className="columns">
          <div className="column is-2" />
          <div className="column is-8">
            <Vagrant />
          </div>
        </div>
      </div>
    );
  }
}
