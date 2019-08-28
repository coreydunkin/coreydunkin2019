import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { connect } from "react-redux";
import animAction from "../../actions/animAction"

let animDecider;
let workAnim;
let updatedWorkAnim;
class Work extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.  
  constructor(props) {
    super(props);
    this.delay = 1000;
  }

  state = {
    workAnim: "fadeOut"
  };
  
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.animWork.animType !== this.props.animWork.animType) {
      this.setState({ workAnim: this.props.animWork.animType });


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
        "title": "Mitchell",
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

       


       {workItem.map((item, i) => 
  
        

            <div className="slide" key={i}>

              <div className="workContainer">

              <div className={"workDesktop" + " animated " + this.state.workAnim}
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}></div>
                <div className={"workMobile" + " animated " + this.state.workAnim}
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}></div>

              <h2 className={'animated ' + this.state.workAnim} 
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}><span>{item.title}</span></h2> 
             
              <p className={'animated ' + this.state.workAnim} 
              style={{ animationDelay: '0ms', 
                       animationDuration: '1500ms', 
                       pointerEvents: 'all'}}> {item.body}</p>



              </div>
              
              


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