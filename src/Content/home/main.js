import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Content from '../main';

import { connect } from "react-redux";
import animAction from "../../actions/animAction"

export const newContent = Content;

class Home extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  
  
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
          <span>COREY&nbsp;</span>
          </Animated>    
      <Animated 
        animationIn={this.props.animHome.animType}
        animationOut={this.props.animHome.animType}
        animationInDelay={this.props.animHome.animDelay2}
        animationInDuration={1000}
        isVisible={this.props.animating}>
          <span>DUNKIN</span>
      </Animated>


          </h1>
        <Animated
        animationIn={this.props.animHome.animType}
        animationOut={this.props.animHome.animType}
        animationInDelay={this.props.animHome.animDelay3}
        animationInDuration={900}
        isVisible={this.props.animating}>
          <h2 className="subhead"><span>WEB DEVELOPER</span></h2>
        </Animated>    

        <Animated
        animationIn={this.props.animHome.animType2}
        animationOut={this.props.animHome.animType2}
        animationInDelay={this.props.animHome.animDelay3}
        animationInDuration={900}
        isVisible={this.props.animating}>
          <h2 className="subhero cta">
            <a href="#About">SEE MORE</a>
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
