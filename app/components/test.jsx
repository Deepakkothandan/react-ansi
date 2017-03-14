/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {
  renderList() {
    let vag = this.props.vagrant;
    return Object.keys(vag).map(key => {
      // console.log(key);
      return <li className="box" key={key}>{key}: {vag[key]}</li>;
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

var mapStatetoProps = state => {
  // console.log(state.vagrant);
  return {
    vagrant: state.vagrant,
    packages: state.packages
  };
};

export default connect(mapStatetoProps)(Test);
