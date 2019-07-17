import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import ReactFullPage, {fullpageApi} from '@fullpage/react-fullpage';
import Content, {MySection} from '../main';
import logo from '../../logo.svg';

import { connect } from "react-redux";
import { animIn } from "../../actions/animIn";
import { animOut } from "../../actions/animOut";
import animAction from "../../actions/animAction"

export const newContent = Content;

class Home extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  
  render() {
    
    
    console.log(Content.prototype);

    console.log(this.props.animType);
    console.log("YOU GOT IT");

    return (
      <div className="home page">
      



          <h1 className="hero">
      <Animated 
        animationIn={this.props.animType}
        animationOut={this.props.animType}
        animationInDelay={3000}
        animationInDuration={1000}
        isVisible={this.props.animating}>    
          <span>WEBGL</span>
          </Animated>    
      <Animated 
        animationIn={this.props.animType}
        animationOut={this.props.animType}
        animationInDelay={3200}
        animationInDuration={1000}
        isVisible={this.props.animating}>
          <span>&nbsp;REACT</span>
      </Animated>
          </h1>
      <Animated
        animationIn={this.props.animType}
        animationOut={this.props.animType}
        animationInDelay={5000}
        animationInDuration={900}
        isVisible={this.props.animating}>

          <h2 className="subhero">
            <a href="#About">NEXT PAGE</a>
          </h2>


      </Animated>    

         
      
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  animAction: (payload) => dispatch(animAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps) (Home);
