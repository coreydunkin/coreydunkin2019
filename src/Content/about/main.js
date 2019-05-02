import React, { Component } from 'react';

class About extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  render() {
    return (
      <div className="about page">
          <h1 className="hero">TESTER</h1>
          <h2 className="subhero">A website built in react controlling webgl</h2>
      </div>
    );
  }
}

export default About;
