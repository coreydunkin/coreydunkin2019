import React, { Component } from 'react';

class About extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  render() {
    return (
      <div className="about page">
          <h1 className="hero">ABOUT THIS PAGE</h1>
          <h2 className="subhero">This is to test if webgl can be controlled inside react.</h2>
      </div>
    );
  }
}

export default About;
