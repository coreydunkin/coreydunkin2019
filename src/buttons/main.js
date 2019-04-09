import React, { Component } from 'react';
import GLC from '../WebGL/GLCommander/index.js';
import init, {render, canvas, gl} from '../WebGL/init/index.js';


class ToggleButton extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = (init) => {

    console.log(GLC.colorA);

    GLC.newNumber = `8000.5`;
    GLC.colorA = `0.0/0.0,0.0/0.0,0.0/0.0`;

    console.log(this.props.init);
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
