import React, { Component } from 'react';
import GLC from '../WebGL/GLCommander/index.js';


class ToggleButton extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClickPumpkin = (init) => {
    GLC.changeNumbersPumpkin();
  }
  handleClickIceCream = (init) => {
    GLC.changeNumbersIceCream();
  }
  handleClickSpooky = (init) => {
    GLC.changeNumbersSpooky();
  }    

  render() {
    return (
      <div>
      <button className="pumpkin" onClick={this.handleClickPumpkin}>
        Pumpkin themed
      </button>
      <button className="icecream" onClick={this.handleClickIceCream}>
        Ice Cream themed
      </button>
      <button className="spooky" onClick={this.handleClickSpooky}>
        Spooky themed
      </button>
      </div>
    );
  }
}

export default ToggleButton;
