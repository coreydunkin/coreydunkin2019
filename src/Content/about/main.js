import React, { Component } from 'react';
import {Animated} from "react-animated-css";
const reqSvgs = require.context ('../../images/logos', true, /\.svg$/);



const paths = reqSvgs.keys ()

const svgs = paths.map( path => reqSvgs ( path ) )



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
          <Animated 
          animationIn={this.props.animAbout.animType2}
          animationOut={this.props.animAbout.animType2}
          animationInDelay={1100}
          animationInDuration={900}
          isVisible={this.props.animating}>   
          <p>I've worked on high traffic, intricate websites for large-scale clients such as 
           <strong> Macquarie Bank</strong>, <strong>NBNco</strong>, <strong>Australian Defence Force</strong> and many more.
        Using the skills I've learnt in <strong>HTML5</strong>, <strong>SASS</strong>, and <strong>Javascript</strong>. 
        I've created webapps from the ground up utilising frameworks such as 
        <strong> Angular</strong>, <strong>React</strong> and <strong>Vue</strong>.</p>
          </Animated>   

      </div>
      <div className={"animated " + this.props.animAbout.animType2}
      style={{ animationDelay: '1200ms', 
               animationDuration: '900ms'}}>
      <hr />
        <div className="logo-container">
          <div className="col-50">
          <h3>I've worked for</h3>
          <ul className="clientLogos">
            {clientItem.map((item, i) => 
              <li key={i}>
                <img alt="client" className={item.title} data-src={item.image}></img>
              </li>
            )}
          </ul>
          </div>
          <div className="col-50">
          <h3>And I've used</h3>
          <ul className="skillLogos">
            {skillItem.map((item, i) => 
              <li key={i}>
                <img alt="skills" className={item.title} data-src={item.image}></img>
              </li>
            )}
          </ul>
          </div>
        </div>
      </div>
     
      </div>
    );
  }
}

export default About;
