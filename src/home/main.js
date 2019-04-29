import React, { Component } from 'react';
import ToggleButton from '../buttons/main';

class Home extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  render() {
    return (
      <div className="home">
        <div className="absolute-center">
          <h1 className="hero">COREY DUNKIN</h1>
          <h2 className="subhero">- front-end developer - designer - creative -</h2>
          <ToggleButton></ToggleButton>
        </div>
      </div>
    );
  }
}

export default Home;
