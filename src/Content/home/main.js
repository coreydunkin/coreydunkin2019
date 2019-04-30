import React, { Component } from 'react';
import ToggleButton from '../../buttons/main';
import {Animated} from "react-animated-css";

class Home extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  render() {
    return (
      <div className="home page">
      
          <h1 className="hero">
      <Animated 
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        animationInDelay="3000"
        animationInDuration={1500}
        isVisible={true}>    
          WEBGL 
          </Animated>    
      <Animated 
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        animationInDelay="3200"
        animationInDuration={1500}
        isVisible={true}>
          REACT
      </Animated>
          </h1>
      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        animationInDelay="4500"
        animationInDuration={900}
        isVisible={true}>

          <h2 className="subhero">- ABOUT -</h2>
      </Animated>    

         
      
      </div>
    );
  }
}

export default Home;
