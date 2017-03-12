import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { updatePackages } from '../redux/actions';

class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  logChange = (value) => {
    this.setState({ value });
  }

  render() {
    const options = [
      { value: 'one', label: 'git' },
      { value: 'two', label: 'vim' },
    ];

    return (
      <div className="packages">
        <h1 className="title">Packages</h1>
        <Select
          name="form-field-name"
          value={this.state.value}
          options={options}
          multi
          onChange={this.logChange}
        />

        <br />

        <button
          className="button is-medium is-primary is-pulled-right"
          onClick={() => this.props.nextStep()}
        >
          Next
        </button>
        <button
          className="button is-medium is-primary is-pulled-left"
          onClick={() => this.props.previousStep()}
        >
          Previous
        </button>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  // console.log(state);
  return {
    packages: state.packages,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePackages }, dispatch);
}

Packages.propTypes = {
  updatePackages: PropTypes.func.isRequired, //eslint-disable-line
  previousStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Packages);
