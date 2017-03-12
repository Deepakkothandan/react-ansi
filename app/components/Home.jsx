import React, { Component } from 'react';
import Vagrant from './Vagrant';
import Packages from './packages';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  }

  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return <Vagrant nextStep={this.nextStep} />;
      case 2:
        return <Packages nextStep={this.nextStep} previousStep={this.previousStep} />;
      default:
        this.state.step = 1;
        return <Vagrant nextStep={this.nextStep} />;
    }
  }

  render() {
    return (
      <div >
        {this.renderStep()}
      </div>
    );
  }
}
