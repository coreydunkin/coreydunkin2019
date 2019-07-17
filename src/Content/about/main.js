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
      <div key={this.props.animAbout.animType}>


      <Animated 
      animationIn={this.props.animAbout.animType}
      animationOut={this.props.animAbout.animType}
      animationInDelay={this.props.animAbout.animDelay2}
      animationInDuration={900}
      isVisible={this.props.animating}>   

          <h1 className="hero">IM ALSO TIRED</h1>

          </Animated>
          <Animated 
          animationIn={this.props.animAbout.animType}
          animationOut={this.props.animAbout.animType}
          animationInDelay={this.props.animAbout.animDelay1}
          animationInDuration={900}
          isVisible={this.props.animating}>   
          <h2 className="subhero">IT'S TRUE</h2>
      
          </Animated>
      </div>
      </div>
     
    );
  }
}

export default About;
