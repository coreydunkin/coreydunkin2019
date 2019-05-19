import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Content from "../main";
import logo from '../../logo.svg';
import { connect } from "react-redux";
import { animIn } from "../../actions/animIn";
import { animOut } from "../../actions/animOut";


let animDecider;


class Work extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.  
  render(animDecider) {
    console.log('header content');
    console.log(Content);

    const changeAnim = (animDecider) => {
      animDecider = this.props.anim;

      if (this.props.anim = true) {

        this.props.anim = false;

      } else if (this.props.anim = false) {
        
        this.props.anim = true;

        console.log('false323423');
      }


    };

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

            <img 
              src={logo} 
              className={
                "App-logo" + 
                (this.props.anim ? "":" App-logo-paused")
              } 
              alt="logo" 
              onClick={
                /*this.props.anim ? 
                  this.props.animOut : this.props.animIn*/
                  changeAnim
                }
            />

              <h2> {item.title}</h2> 
              <p> {item.body}</p>
            
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
  animIn: () => dispatch(animIn),
  animOut: () => dispatch(animOut)
});

export default connect(mapStateToProps, mapDispatchToProps) (Work);
