import React, { Component } from 'react';
import {Animated} from "react-animated-css";
const reqSvgs = require.context ('../../images/logos', true, /\.svg$/);



const paths = reqSvgs.keys ()

const svgs = paths.map( path => reqSvgs ( path ) )

  console.log('=====');
  console.log(svgs[2]);

class Contact extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  


  render() {

    const clientItem = [
      {
        "id": 3,
        "image": svgs[4],
        "title": "Macquarie"
      },
      {
        "id": 0,
        "image": svgs[5],
        "title": "McDonalds"
      },
      {
        "id": 3,
        "image": svgs[6],
        "title": "NBN"
      },
      {
        "id": 4,
        "image": svgs[9],
        "title": "Telstra"
      },
      {
        "id": 4,
        "image": svgs[10],
        "title": "Volkswagen"
      },
      {
        "id": 1,
        "image": svgs[1],
        "title": "ADF"
      },
    ];

    const skillItem = [
      {
        "id": 1,
        "image": svgs[7],
        "title": "React"
      },
      {
        "id": 5,
        "image": svgs[0],
        "title": "Angular"
      },
      {
        "id": 5,
        "image": svgs[2],
        "title": "HTML"
      },
      {
        "id": 2,
        "image": svgs[11],
        "title": "Vue"
      },
      {
        "id": 0,
        "image": svgs[3],
        "title": "JS"
      },
      {
        "id": 2,
        "image": svgs[8],
        "title": "SASS"
      },
    ];

    return (

      <div className="contact page">
     
      <div key={this.props.animContact.animType}>

      <div className="heroContainer">
          
        <Animated 
        animationIn={this.props.animContact.animType}
        animationOut={this.props.animContact.animType}
        animationInDelay={this.props.animContact.animDelay2}
        animationInDuration={900}
        isVisible={this.props.animating}>   
            <h1 className="hero"><span>CALL ME?</span></h1>

            </Animated>
            <Animated 
            animationIn={this.props.animContact.animType}
            animationOut={this.props.animContact.animType}
            animationInDelay={this.props.animContact.animDelay1}
            animationInDuration={900}
            isVisible={this.props.animating}>   
            <h2 className="subhero"></h2>
        
            </Animated>
          </div>
          <Animated 
          animationIn={this.props.animContact.animType}
          animationOut={this.props.animContact.animType}
          animationInDelay={1100}
          animationInDuration={900}
          isVisible={this.props.animating}>   
          <p>List out the contact details.</p>
          </Animated>   

      </div>

     
      </div>
    );
  }
}

export default Contact;
