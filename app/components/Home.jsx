import React, { Component } from 'react';
import Vagrant from './Vagrant';
import Packages from './packages';

export default class Documentation extends Component {

  render() {
    return (
      <div >
        <Vagrant />
        <br />
        <Packages />
      </div>
    );
  }
}
