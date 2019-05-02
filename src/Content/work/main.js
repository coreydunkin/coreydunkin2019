import React, { Component } from 'react';

class Work extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  render() {
    return (
      <div className="work page">
          <h1 className="hero">TESTER 2</h1>
          <h2 className="subhero">A website built in react controlling webgl</h2>
      </div>
    );
  }
}

export default Work;
