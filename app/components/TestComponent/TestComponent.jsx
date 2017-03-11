import React, { Component } from 'react';
import styles from './styles.scss';

export default class TestComponent extends Component {

  render() {
    return (
      <div>
        <br />
        <div className="box">
          <div className={styles.box}>
            <p>  Test Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Facere, veritatis. Eius sunt accusamus quisquam delectus illo sequi nihil,
        tempore inventore at ipsa odio ex molestias saepe ad expedita beatae repudiandae?
            </p>
            not styled
          </div>
        </div>
      </div>
    );
  }
}
