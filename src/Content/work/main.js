import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Content from "../main";
import logo from '../../logo.svg';
import { connect } from "react-redux";
import { animIn } from "../../actions/animIn";
import { animOut } from "../../actions/animOut";
import animAction from "../../actions/animAction"

let animDecider;


class Work extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.  
  render(animDecider) {


    const workItem = [
      {
        "id": 1,
        "title": "item 1",
        "body": "example"
      },
      {
        "id": 2,
        "title": "item 2",
        "body": "This is some work too"
      },
      {
        "id": 2,
        "title": "item 3",
        "body": "This is some work too"
      },
    ]

    return (
      
    <div className="work page">
       {workItem.map((item, i) => 
      


            <div className="slide" key={i}>
 
            <Animated
            animationIn="fadeInDown"
            animationOut="fadeInDown"
            animationInDelay={1500}
            animationInDuration={900}
            isVisible={Content.workSection}>

            <Animated
            animationIn="fadeInDown"
            animationOut="fadeInDown"
            animationInDelay={1500}
            animationInDuration={900}
            isVisible={this.props.animating}>
              <h2> {item.title}</h2> 
              <p> {item.body}</p>
              </Animated>    
            </Animated>    
            </div> 
      
       )}

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

export default connect(mapStateToProps, mapDispatchToProps) (Work);