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
  constructor(props){
    super(props);    
  }
  
  render() {
    
    


    return ( 
      <div className="home page"> 
        <div key={this.props.animHome.animType}>



          <h1 className="hero">
      <Animated
        animationIn={this.props.animHome.animType}
        animationOut={this.props.animHome.animType}
        animationInDelay={this.props.animHome.animDelay1}
        animationInDuration={1000}
        isVisible={this.props.animating}>    
          <span>I'M A</span>
          </Animated>    
      <Animated 
        animationIn={this.props.animHome.animType}
        animationOut={this.props.animHome.animType}
        animationInDelay={this.props.animHome.animDelay2}
        animationInDuration={1000}
        isVisible={this.props.animating}>
          <span>&nbsp;DUMB DUMB</span>
      </Animated>
          </h1>
      <Animated
        animationIn={this.props.animHome.animType}
        animationOut={this.props.animHome.animType}
        animationInDelay={this.props.animHome.animDelay3}
        animationInDuration={900}
        isVisible={this.props.animating}>

          <h2 className="subhero">
            <a href="#About">NEXT PAGE</a>
          </h2>


      </Animated>    

         
      </div>
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
