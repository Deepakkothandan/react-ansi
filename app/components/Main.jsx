import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Main extends Component {

  render() {
    return (
      <div className="Main">
        <Navbar />
        <br />
        <div className="columns">
          <div className="column is-2" />
          <div className="column is-8">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};
