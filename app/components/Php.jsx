import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPhpVersion } from '../redux/actions';

class LangPhp extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="box">
          PHP
        </div>
        <p className="control">
          <label htmlFor="php55" className="radio">
            <input
              type="radio"
              name="question"
              value="5.5"
              checked={this.props.php.version === '5.5'}
              onClick={event =>
                this.props.setPhpVersion({ version: event.target.value })}
            />
            5.5
          </label>
          <label htmlFor="php56" className="radio">
            <input
              type="radio"
              name="question"
              value="5.6"
              checked={this.props.php.version === '5.6'}
              onClick={event =>
                this.props.setPhpVersion({ version: event.target.value })}
            />
            5.6
          </label>
          <label htmlFor="php70" className="radio">
            <input
              type="radio"
              name="question"
              value="7.0"
              checked={this.props.php.version === '7.0'}
              onClick={event =>
                this.props.setPhpVersion({ version: event.target.value })}
            />
            7.0
          </label>
          <label htmlFor="php71" className="radio">
            <input
              type="radio"
              name="question"
              value="7.1"
              checked={this.props.php.version === '7.1'}
              onClick={event =>
                this.props.setPhpVersion({ version: event.target.value })}
            />
            7.1
          </label>
        </p>
        <div>
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
      </div>
    );
  }
}

LangPhp.propTypes = {
  setPhpVersion: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  php: PropTypes.object.isRequired // eslint-disable-line
};

function mapStateToProps(state) {
  return {
    php: state.php
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setPhpVersion
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LangPhp);
