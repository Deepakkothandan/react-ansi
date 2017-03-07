import React, { Component } from 'react';
import Navbar from './Navbar';

export default class About extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="box">
          About Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Facere, veritatis. Eius sunt accusamus quisquam delectus illo sequi nihil,
        tempore inventore at ipsa odio ex molestias saepe ad expedita beatae repudiandae?
        </div>
      </div>
    );
  }
}
