import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Content from "../main";

class Work extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.  
  render() {
    console.log('header content');
    console.log(Content);

    const workItem = [
      {
        "id": 1,
        "title": "item 1",
        "body": "This is some work"
      },
      {
        "id": 2,
        "title": "item 2",
        "body": "This is some work too"
      },
      {
        "id": 2,
        "title": "item 2",
        "body": "This is some work too"
      },
    ]

    return (
      
    <div className="work page">
       {workItem.map((item, i) => 

            <div className="slide" key={i}>

            <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutUp"
            animationInDelay={1000}
            animationInDuration={900}
            isVisible={Content.workSection}>

              <h2> {item.title}</h2> 
              <p> {item.body}</p>
            
            </Animated>    
            </div> 

       )}

    </div>
      
    );
  }
}

export default Work;
