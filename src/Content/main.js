import React, { Component } from 'react';
import Home from './home/main';
import About from './about/main';
import Work from './work/main';
import {Animated} from "react-animated-css";

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import GLC from '../WebGL/GLCommander/index.js';
import ReactFullpage from '@fullpage/react-fullpage';
import { connect } from "react-redux";
import animAction from "../actions/animAction";
import animIn from "../actions/animIn";
import animOut from "../actions/animOut";

import logo from '../logo.svg';

let moveSection;
let moveDown;
let moveUp;
let timeoutId;
let preventDefault;
let preventDefaultForScrollKeys;
let disableScroll;
let enableScroll;
let animPageType;
let handleAnimInUp;
let handleAnimInDown;
let handleAnimOutUp;
let handleAnimOutDown;

export class MySection extends Component {

  render=( state, fullpageApi ) => {
    return (
      <div className="section">
        {this.props.children}
      </div>
    );
  }

}

const anchors = ["/", "About", "Work"];

class Content extends Component {
  constructor(props) {
    super(props);
    this.delay = 1000;
  }
  state = {
    animationIsFinished: false,
    animHome: {
      animType: "fadeInDown",
      animDelay1: 3000,
      animDelay2: 3200,
      animDelay3: 5000
    },
    animAbout: {
      animType: "fadeOutDown",
      animDelay1: 1500,
      animDelay2: 1800
    },
    animWork: {
      animType: "fadeOutDown",
      animDelay: 1500
    }
  };

  render=()=> {
    return (
      <div>

      <ReactFullpage
      anchors={anchors}
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction) => {


        // we disable the scroll so that the moveSection method can finish
        // this needs to be done for animation purposes to run
        disableScroll();
        handleAnimOutUp();

        clearTimeout(timeoutId);
        // delaying the next page event so we can add some animations to our page elements
        if (this.state.animationIsFinished == false) {
          timeoutId = setTimeout(() => { 
            this.setState({ animationIsFinished: true });
            

            moveSection(direction);
          }, this.delay);
        }



        //this.handleAnimOut();
        //this.handleAnimInUp();

        if(origin.anchor === "/") {
          this.setState({animHome: {
            animType: "fadeOutUp",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 300
          }});
        } else if (origin.anchor === "About") {
          if(direction === "down") {
            this.setState({animAbout: {
              animType: "fadeOutUp",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          } else {
            this.setState({animAbout: {
              animType: "fadeOutDown",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          }
        }

        /*
        if(destination.anchor === "/") {
          if(direction == "down") {
            this.setState({ animTypeHome: "fadeInUp" });
          } else {
            this.setState({ animTypeHome: "fadeInDown" });
          }
        } else if(destination.anchor === "About") {
          if(direction == "down") {
            this.setState({ animTypeAbout: "fadeInUp" });
          } else {
            this.setState({ animTypeAbout: "fadeInDown" });
          }
        } else if(destination.anchor === "Work") {
          if(direction == "down") {
            this.setState({ animTypeAbout: "fadeInUp" });
          } else {
            this.setState({ animTypeAbout: "fadeInDown" });
          }
        }
        */

        if(destination.anchor === "/") {
          GLC.changeNumbersAnimHome();
        } else if(destination.anchor === "About") {
          GLC.changeNumbersAnimAbout();
        } else if(destination.anchor === "Work") {
          GLC.changeNumbersAnimWork();
        }

        return this.state.animationIsFinished;

      }}
      afterLoad={(origin, destination, direction, animPageType) => {

        if(destination.anchor === "/") {
          this.setState({animHome: {
            animType: "fadeInDown",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 300
          }});
        } else if(destination.anchor === "About") {
         if(direction === "down") {
          this.setState({animAbout: {
            animType: "fadeInUp",
            animDelay1: 500,
            animDelay2: 700,
          }});
         } else {
          this.setState({animAbout: {
            animType: "fadeInDown",
            animDelay1: 500,
            animDelay2: 700,
          }});
         }
        }


        //this.handleAnimIn();
        //this.handleAnimOutUp();

        /*
        if(origin.anchor === "/") {
          if(direction == "down") {
            this.setState({ animTypeHome: "fadeOutUp" });
          } else {
            this.setState({ animTypeHome: "fadeOutDown" });
          }
        } else if(origin.anchor === "About") {
          if(direction == "down") {
            this.setState({ animTypeAbout: "fadeOutUp" });
          } else {
            this.setState({ animTypeAbout: "fadeOutDown" });
          }
        } else if(origin.anchor === "Work") {
          if(direction == "down") {
            this.setState({ animTypeAbout: "fadeOutUp" });
          } else {
            this.setState({ animTypeAbout: "fadeOutDown" });
          }
        }
        */
      }}
      onSlideLeave={(origin, destination, direction, item, id) => {
        console.log(item);
      }}
      render={({ state, fullpageApi, destination, index, direction }) => {
        
        // set the direction and reset the animationIsFinished property
        moveSection = (direction) => {
          if (direction == 'up') {
            fullpageApi.moveSectionUp();
          } else {
            fullpageApi.moveSectionDown();
          }
          this.setState({ animationIsFinished: false });
          enableScroll();
        };

        // disable scroll event
        disableScroll = () => {
          fullpageApi.setAllowScrolling(false);
        }
        
        // enable scroll event
        enableScroll = () => {
          fullpageApi.setAllowScrolling(true);
        }        
        
        handleAnimOutUp = (animPageType) => {
          this.setState({ animPageType: "fadeOutUp" });
        }
      
        handleAnimOutDown = (animPageType) => {
          this.setState({ animPageType: "fadeOutDown" });
        }
      
        handleAnimInUp = (animPageType) => {
          this.setState({ animPageType: "fadeInUp" });
        }
      
        handleAnimInDown = (animPageType) => {
          this.setState({ animPageType: "fadeOutUp" });
        }

      

        return (
          <div>
            <MySection><Home animHome={this.state.animHome} /></MySection>
            <MySection><About animAbout={this.state.animAbout} /></MySection>
            <MySection><Work animWork={this.state.animWork} /></MySection>
          </div>
        );
      }}
    />
    </div>
    );


  }




  handleAnimIn = () => {
    this.props.animIn(!this.props.animating)
  }
  handleAnimOut = () => {
    this.props.animOut(!this.props.animating)
  }

}



const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  animAction: (payload) => dispatch(animAction(payload)),
  animIn: (payload) => dispatch(animIn(payload)),
  animOut: (payload) => dispatch(animOut(payload))
});

export default connect(mapStateToProps, mapDispatchToProps) (Content);