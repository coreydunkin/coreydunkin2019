import React, { Component } from 'react';

class About extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  render() {
    return (
      <div className="about">
        <div className="absolute-center">
          <h1 className="hero">ABOUT ME</h1>
          <h2 className="subhero">This is the about me section</h2>
        </div>  
      </div>
    );
  }
}

export default About;
