import React, { Component } from 'react';
import ToggleButton from '../../buttons/main';

class Home extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  render() {
    return (
      <div className="home page">
          <h1 className="hero">WEBGL React TEST</h1>
          <h2 className="subhero">- webgl - react - animations  -</h2>
          <ToggleButton></ToggleButton>
        
      </div>
    );
  }
}

export default Home;
