import React, { Component } from 'react';
import GLC from '../WebGL/GLCommander/index.js';


class ToggleButton extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = (init) => {

    console.log(GLC.colorA);

    GLC.newNumber = `8000.5`;
    GLC.colorA = `0.0/0.0,0.0/0.0,0.0/0.0`;

    GLC.changeNumbers(GLC.colorA);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default ToggleButton;
