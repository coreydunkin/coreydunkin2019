import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import ReactFullPage, {fullpageApi} from '@fullpage/react-fullpage';

import Content, {MySection} from '../main';

export const newContent = Content;

class Home extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  
  render() {
    
    
    console.log(Content.prototype);

    return (
      <div className="home page">
      
          <h1 className="hero">
      <Animated 
        animationIn="fadeIn"
        animationOut="fadeOutUp"
        animationInDelay={3000}
        animationInDuration={1000}
        isVisible={true}>    
          <span>WEBGL</span>
          </Animated>    
      <Animated 
        animationIn="fadeIn"
        animationOut="fadeOutUp"
        animationInDelay={3200}
        animationInDuration={1000}
        isVisible={true}>
          <span>&nbsp;REACT</span>
      </Animated>
          </h1>
      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        animationInDelay={5000}
        animationInDuration={900}
        isVisible={true}>

          <h2 className="subhero">
            <a href="#About">NEXT PAGE</a>
          </h2>


      </Animated>    

         
      
      </div>
    );
  }
}

export default Home;
