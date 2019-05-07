import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import ReactFullPage, {fullpageApi} from '@fullpage/react-fullpage';

import Content, {MySection} from '../main';

import Parallax from 'parallax-js';

export const newContent = Content;

class Home extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  componentDidMount() {
    this.Parallax = new Parallax(this.scene);
    this.Parallax.friction(0.2, 0.2);
  }

  componentWillUnmount() {
    this.Parallax.disable();
  }

  
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
        animationInDelay={4500}
        animationInDuration={900}
        isVisible={true}>

          <h2 className="subhero">
            <a href="#About">NEXT PAGE</a>
          </h2>


      </Animated>    

        <div className="scene"  ref={el => this.scene = el}>
          <h3 data-depth="0.4">THIS IS SOME PARALLAX STUFF</h3>
          <p data-depth="0.2">More parallax stuff.</p>
          <p data-depth="0.0">This too.</p>
        </div>
      </div>
    );
  }
}

export default Home;
