import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePackages } from '../redux/actions';

class Packages extends Component {

  render() {
    const names = ['vim', 'git', 'nginx'];
    const { packages } = this.props;

    return (
      <div className="packages">
        <h1 className="title">Packages</h1>
        <label htmlFor="select box" className="label">Select Box</label>
        <p className="control">
          <span className="select is-fullwidth">
            <select onChange={event => this.setState({ packages: event.target.value })}>
              <option value="" disabled selected hidden>Please Choose...</option>
              {names.map((name, index) =>
                <option key={index}>{name}</option>,
              )}
            </select>
          </span>
        </p>
        <button
          className="button is-medium is-primary is-pulled-right"
          onClick={() => this.props.updatePackages({
            packages,
          })}
        >
          Next
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
  packages: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(mapStatetoProps, mapDispatchToProps)(Packages);
