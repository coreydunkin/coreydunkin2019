import React, { Component } from 'react';
import {Animated} from "react-animated-css";
const reqSvgs = require.context ('../../images/logos', true, /\.svg$/);



const paths = reqSvgs.keys ()

const svgs = paths.map( path => reqSvgs ( path ) )

  console.log('=====');
  console.log(svgs[2]);

class About extends Component {
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

      <div className="about page">
     
      <div key={this.props.animAbout.animType}>

      <div className="heroContainer">
          
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
            <h2 className="subhero">(IT'S TRUE)</h2>
        
            </Animated>
          </div>
          <p>Living in Sydney. 
        I've worked for clients such as <strong>McDonald's</strong>, <strong>Volkswagen</strong> and <strong>Telstra</strong>, 
        using the skills i've learnt in photoshop, illustrator, sketch, html, 
        sass, js/jquery. Building out apps with frameworks such as angularjs and 
        using gulp/grunt to help automate my workflow.</p>

      </div>
      
      <hr />
      
        <div className="logo-container">
          <div className="col-50">
          <h3>I've worked with these clients</h3>
          <ul className="clientLogos">
            {clientItem.map((item, i) => 
              <li key={i}>
                <img className={item.title} src={item.image}></img>
              </li>
            )}
          </ul>
          </div>
          <div className="col-50">
          <h3>And I've utilised these tools</h3>
          <ul className="skillLogos">
            {skillItem.map((item, i) => 
              <li key={i}>
                <img className={item.title} src={item.image}></img>
              </li>
            )}
          </ul>
          </div>
        </div>
      

      </div>
     
    );
  }
}

export default About;
