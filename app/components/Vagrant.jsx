import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateVagrant, { setOs, setHostName } from '../redux/actions';

class Vagrant extends Component {

  render() {
    const names = ['ubuntu/trusty64', 'ubuntu/xenial64', 'centos7'];
    const { vagrant } = this.props;
    return (
      <div className="vagrant">
        <h1 className="title">Vagrant</h1>
        <label htmlFor="select box" className="label">Select Box</label>
        <p className="control">
          <span className="select is-fullwidth">
            <select onChange={event => this.props.setOs({ os: event.target.value })}>
              <option value="" disabled selected hidden>Please Choose...</option>
              {names.map((name, index) =>
                <option key={index}>{name}</option>,
              )}
            </select>
          </span>
        </p>
        <label htmlFor="hostname" className="label has-text-left">Host Name</label>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder={this.props.vagrant.name}
            onBlur={event => this.props.setHostName({ name: event.target.value })}
          />
        </p>
        <label htmlFor="ip" className="label has-text-left">IP Address</label>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder={this.props.vagrant.ip}
            onChange={event => this.setState({ ip: event.target.value })}
          />
        </p>
        <label htmlFor="memory" className="label has-text-left">Memory</label>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder={this.props.vagrant.memory}
            onChange={event => this.setState({ memory: event.target.value })}
          />
        </p>
        <label htmlFor="path" className="label has-text-left">Shared Folder Path</label>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder={this.props.vagrant.sp}
            onChange={event => this.setState({ sp: event.target.value })}
          />
        </p>
        <button
          className="button is-medium is-primary is-pulled-right"
          onClick={() => this.props.updateVagrant(
            vagrant,
          )}
        >
          Next
        </button>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  // console.log(state.vagrant);
  return {
    vagrant: state.vagrant,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateVagrant, setOs, setHostName }, dispatch);
}

Vagrant.propTypes = {
  vagrant: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  updateVagrant: React.PropTypes.func.isRequired,
  setOs: React.PropTypes.func.isRequired,
  setHostName: React.PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Vagrant);
