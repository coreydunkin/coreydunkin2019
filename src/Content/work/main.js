import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import {workSection} from '../main';

class Work extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.  
  render() {

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
      
    <div className="home page">
       
       {workItem.map((item, i) => 

          <Animated
          animationIn="fadeInUp"
          animationOut="fadeOutUp"
          animationInDelay={1000}
          animationInDuration={900}
          isVisible={workSection}>
   
            <div className="slide" key={i}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div> 

         </Animated>    

       )}

    </div>
      
    );
  }
}

export default Work;
