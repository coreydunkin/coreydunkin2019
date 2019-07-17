import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Content from "../main";

import { animIn } from "../../actions/animIn";
import { animOut } from "../../actions/animOut";
import animAction from "../../actions/animAction";

class About extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  render() {
    return (

      <div className="about page">
      <Animated 
      animationIn={this.props.animType}
      animationOut={this.props.animType}
      animationInDelay={1500}
      animationInDuration={900}
      isVisible={Content.aboutSection}>

      <Animated 
      animationIn={this.props.animType}
      animationOut={this.props.animType}
      animationInDelay={1500}
      animationInDuration={900}
      isVisible={this.props.animating}>   

          <h1 className="hero">TESTER</h1>
          <h2 className="subhero">A website built in react controlling webgl</h2>
      
      </Animated>
      </Animated>
      </div>
     
    );
  }
}

export default About;
