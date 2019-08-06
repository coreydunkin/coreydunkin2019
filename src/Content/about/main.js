import React, { Component } from 'react';
import {Animated} from "react-animated-css";

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

          <h1 className="hero"><span>IS COOL</span></h1>

          </Animated>
          <Animated 
          animationIn={this.props.animAbout.animType}
          animationOut={this.props.animAbout.animType}
          animationInDelay={this.props.animAbout.animDelay1}
          animationInDuration={900}
          isVisible={this.props.animating}>   
          <h2 className="subhero">IT'S TRUE</h2>
      
          </Animated>

          <p>Living in Sydney. I've worked for clients such as McDonald's, Volkswagen and Telstra, using the skills i've learnt in photoshop, illustrator, sketch, html, sass, js/jquery. Building out apps with frameworks such as angularjs and using gulp/grunt to help automate my workflow.</p>
      </div>
      </div>
     
    );
  }
}

export default About;
