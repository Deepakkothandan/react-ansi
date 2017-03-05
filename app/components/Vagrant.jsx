import React, { Component } from 'react';

export default class Vagrant extends Component {
  constructor() {
    super();
    this.state = {
      hostname: 'vagrant',
      ip: '192.18.10.10',
      sharedpath: './',
      memory: 512,
    };
  }

  render() {
    const names = ['ubuntu/trusty64', 'ubuntu/xenial64', 'centos7'];

    return (
      <div className="vagrant">
        <h1 className="title">Vagrant</h1>
        <label htmlFor="select box" className="label">Select Box</label>
        <p className="control">
          <span className="select is-fullwidth">
            <select>
              {names.map((name, index) =>
                <option key={index}>{name}</option>,
              )}
            </select>
          </span>
        </p>
        <label htmlFor="hostname" className="label has-text-left">Host Name</label>
        <p className="control">
          <input className="input" type="text" placeholder="Text input" value={this.state.hostname} />
        </p>
        <label htmlFor="ip" className="label has-text-left">IP Address</label>
        <p className="control">
          <input className="input" type="text" placeholder="Text input" value={this.state.ip} />
        </p>
        <label htmlFor="memory" className="label has-text-left">Memory</label>
        <p className="control">
          <input className="input" type="text" placeholder="Text input" value={this.state.memory} />
        </p>
        <label htmlFor="path" className="label has-text-left">Shared Folder Path</label>
        <p className="control">
          <input className="input" type="text" placeholder="Text input" value={this.state.sharedpath} />
        </p>
      </div>
    );
  }
}
