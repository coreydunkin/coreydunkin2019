import React, { Component } from 'react';
import GLC from '../WebGL/GLCommander/index.js';
// set up global javascript variables

let canvas, gl; // canvas and webgl context

let shaderSource;
let buffer;


/* Variables holding the location of uniform variables in the WebGL. We use this to send info to the WebGL script. */
let locationOfTime;
let locationOfResolution;

let startTime = new Date().getTime(); // Get start time for animating
let currentTime = 0;


let positionLocation;
let program;

class ToggleButton extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    GLC.newNumber = `8000.5`;
    GLC.colorA = `0.0/0.0,0.0/0.0,0.0/0.0`;
    gl.bufferSubData();
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
