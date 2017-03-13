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
    const val = value.split(',');
    this.setState({ value });
    this.props.updatePackages({ val });
  }

  render() {
    const options = [
      { value: 'git', label: 'git' },
      { value: 'vim', label: 'vim' },
      { value: 'nginx', label: 'nginx' },
    ];

    return (
      <div className="packages">
        <h1 className="title">Packages</h1>
        <Select
          name="form-field-name"
          value={this.props.packages}
          options={options}
          multi
          onChange={this.logChange}
          joinValues
          delimiter=","
          simpleValue
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
  updatePackages: PropTypes.func.isRequired,
  packages: PropTypes.arrayOf(PropTypes.string).isRequired,
  previousStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Packages);
