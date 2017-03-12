import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOs, setHostName, setSharedPath, setIp, setMemory } from '../redux/actions';

class Vagrant extends Component {

  onClick() {
    // e.preventDefault();
    console.log(this.props.vagrant);
  }

  render() {
    const names = ['ubuntu/trusty64', 'ubuntu/xenial64', 'centos7'];
    // const { vagrant } = this.props;
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
            placeholder={this.props.vagrant.hostname}
            onBlur={event => this.props.setHostName({ hostname: event.target.value })}
          />
        </p>
        <label htmlFor="ip" className="label has-text-left">IP Address</label>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder={this.props.vagrant.ip}
            onBlur={event => this.props.setIp({ ip: event.target.value })}
          />
        </p>
        <label htmlFor="memory" className="label has-text-left">Memory</label>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder={this.props.vagrant.memory}
            onBlur={event => this.props.setMemory({ memory: event.target.value })}
          />
        </p>
        <label htmlFor="path" className="label has-text-left">Shared Folder Path</label>
        <p className="control">
          <input
            className="input"
            type="text"
            placeholder={this.props.vagrant.sharedpath}
            onBlur={event => this.props.setSharedPath({ sharedpath: event.target.value })}
          />
        </p>
        <button
          className="button is-medium is-primary is-pulled-right"
          onClick={() => this.onClick()}
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
  return bindActionCreators({
    setOs,
    setHostName,
    setSharedPath,
    setIp,
    setMemory,
  }, dispatch);
}

Vagrant.propTypes = {
  vagrant: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  setOs: React.PropTypes.func.isRequired,
  setHostName: React.PropTypes.func.isRequired,
  setSharedPath: React.PropTypes.func.isRequired,
  setIp: React.PropTypes.func.isRequired,
  setMemory: React.PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Vagrant);
