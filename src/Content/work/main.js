import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { connect } from "react-redux";
import animAction from "../../actions/animAction"

let animDecider;
let workAnim;

class Work extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.  
  constructor(props) {
    super(props);
    this.delay = 1000;
  }

  state = {
    workAnim: "fadeInUp"
  };
  
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.animWork.animType !== this.props.animWork.animType) {
      this.setState({ workAnim: this.props.animWork.animType });

      console.log('updated');

      console.log(this.state.workAnim);
    }
  }


  render=()=> {



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
;
/* 
    <i key={this.props.animWork.animType}>

    <Animated
    animationIn={this.props.animWork.animType}
    animationOut={this.props.animWork.animType}
    animationInDelay={1500}
    animationInDuration={900}
    isVisible={this.props.animating}>
      <span>THIS IS SOME HIDDEN TEXT</span>
    </Animated> 

    </i> 
*/  
    
console.log(this.state.workAnim + " not updated?");

    return (
      
    <div className="work page">
       <Animated
       animationIn={this.props.workAnim}
       animationOut={this.props.workAnim}
       animationInDelay={1500}
       animationInDuration={900} 
       isVisible={this.props.animating}>   
        {this.state.workAnim}


       {workItem.map((item, i) => 
  
            <div className="slide" key={i}>

              <h2><span>{item.title}</span></h2> 
              <p className={this.state.workAnim}> {item.body}</p>
               
              
              </div>


       )}
      
      </Animated>   
    
    
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