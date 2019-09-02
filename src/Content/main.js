import React, { Component } from 'react';
import Home from './home/main';
import About from './about/main';
import Work from './work/main';
import Contact from './contact/main';
import {Animated} from "react-animated-css";
import Sidebar from "react-sidebar";

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import GLC from '../WebGL/GLCommander/index.js';
import ReactFullpage from '@fullpage/react-fullpage';
import { connect } from "react-redux";
import animAction from "../actions/animAction";
import animIn from "../actions/animIn";
import animOut from "../actions/animOut";

import logo from '../logo.svg';

let moveSlideSection;
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
let moveToSection;

export class MySection extends Component {
  render=( state, fullpageApi ) => {
    return (
      <div className="section">
        {this.props.children}
      </div>
    );
  }
}

const anchors = ["/", "About", "Work", "Contact"];

class Content extends Component {
  constructor(props) {
    super(props);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.delay = 1000;
    this.slideDelay = 1500;
  }
 
  state = {
    animNav: "fadeOutUp",
    animUp: "fadeOutUp",
    animDown: "fadeInUp",
    display: "none",
    sidebarOpen: false,
    animationIsFinished: false,
    animHome: {
      animType: "fadeInDown",
      animType2: "expandIn",
      animDelay1: 0,
      animDelay2: 400,
      animDelay3: 2000
    },
    animAbout: {
      animType: "fadeOutDown",
      animType2: "fadeOut",
      animDelay1: 1500,
      animDelay2: 1800
    },
    animWork: {
      animType: "fadeOutDown",
      animDelay1: 1500,
      animDelay2: 1800,
      animDelay3: 2200
    },
    animContact: {
      animType: "fadeOutDown",
      animDelay1: 1500,
      animDelay2: 1800,
      animDelay3: 2200
    }
  };

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });

    if(this.state.sidebarOpen === true) {
      
      this.setState({
        animNav: "fadeOutUp"
      }, () => {
        setTimeout(() => {
          this.setState({
            display: "none"
          })        
        }, 200);
      });
    } else {
      this.setState({
        animNav: "fadeInDown"
      }, () => {
        setTimeout(() => {
          this.setState({
            display: "block"
          })        
        }, 200);
      });
    }

  }

  render=()=> {

    return ( 
      <div>
      
      <a className={"scroll-up animated " + this.state.animUp}
      style={{ animationDelay: '200ms', 
               animationDuration: '500ms'}} onClick={() => moveSection("up")}><i class="fas fa-chevron-up"></i></a>  
      
      <a className={"scroll-down animated " + this.state.animDown}
      style={{ animationDelay: '200ms', 
               animationDuration: '500ms'}} onClick={() => moveSection("down")}><i class="fas fa-chevron-down"></i></a>

        <Sidebar
        rootId="sidebar"
        onClick={() => console.log('sidebar clicked')}
        transitions={true}
        rootClassName="sidebar-container"
        sidebarClassName="sidebar"
        contentClassName="sidebar-content"
        overlayClassName="sidebar-overlay"
        shadow={false}
        sidebar={
          <ul style={{display: this.state.display}}> 
            <li className={"animated " + this.state.animNav}
            style={{ animationDelay: '0ms', 
                     animationDuration: '200ms'}}>
              <a onClick={() => {this.onSetSidebarOpen(false); GLC.changeNumbersAnimHome()}} href="#/"><sup>1</sup> HOME</a>
            </li>
            <li className={"animated " + this.state.animNav}
            style={{ animationDelay: '100ms', 
                     animationDuration: '200ms'}}>
              <a onClick={() => {this.onSetSidebarOpen(false); GLC.changeNumbersAnimAbout()}} href="#About"><sup>2</sup> ABOUT</a>
            </li>
            <li className={"animated " + this.state.animNav}
            style={{ animationDelay: '200ms', 
                     animationDuration: '200ms'}}>
              <a onClick={() => {this.onSetSidebarOpen(false); GLC.changeNumbersAnimWork()}} href="#Work"><sup>3</sup> WORK</a>
            </li>
            <li className={"animated " + this.state.animNav}
            style={{ animationDelay: '300ms', 
                     animationDuration: '200ms'}}>
              <a onClick={() => {this.onSetSidebarOpen(false); GLC.changeNumbersAnimWork()}} href="#Contact"><sup>4</sup> CONTACT</a>
            </li>
          </ul>
        }
        open={this.state.sidebarOpen}
        pullRight={true}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "transparent" } }}
        >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          <span>&#9776;</span>
        </button>
        </Sidebar>
      <ReactFullpage
      anchors={anchors}
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction) => {

        // add some logic to check if the page you want to go to is 
        // more than 2 page away, using this for animation checks
        let incrementValue = destination.index - origin.index;

        console.log(incrementValue);
        console.log(destination);

        if(incrementValue > 1 || incrementValue < -1) {
          console.log('skip');
          this.setState({ animationIsFinished: true });
          enableScroll();
          moveToSection(destination); 
        } else {

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

        }

        if(origin.anchor === "/") {
          this.setState({animHome: {
            animType: "fadeOutUp",
            animType2: "expandOut",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 2000
          }});
        } else if (origin.anchor === "About") {
          if(direction === "down") {
            this.setState({animAbout: {
              animType: "fadeOutUp",
              animType2: "fadeOut",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          } else {
            this.setState({animAbout: {
              animType: "fadeOutDown",
              animType2: "fadeOut",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          }
        } else if (origin.anchor === "Work") {
          if(direction === "down") {
            this.setState({animWork: {
              animType: "fadeOutUp",
              animType2: "fadeOut",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          } else {
            this.setState({animWork: {
              animType: "fadeOutDown",
              animType2: "fadeOut",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          }
        } else if (origin.anchor === "Contact") {
          if(direction === "down") {
            this.setState({animContact: {
              animType: "fadeOutUp",
              animType2: "fadeOut",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          } else {
            this.setState({animContact: {
              animType: "fadeOutDown",
              animType2: "fadeOut",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          }
        }

        if(destination.anchor === "/") {
          GLC.changeNumbersAnimHome();
          this.setState({
            animUp: "fadeOutUp",
            animDown: "fadeInUp",
          });
        } else if(destination.anchor === "About") {
          GLC.changeNumbersAnimAbout();
          this.setState({
            animUp: "fadeInDown",
            animDown: "fadeInUp",
          });
        } else if(destination.anchor === "Work") {
          GLC.changeNumbersAnimWork();
          this.setState({
            animUp: "fadeInDown",
            animDown: "fadeInUp",
          });
        } else if(destination.anchor === "Contact") {
          GLC.changeNumbersAnimWork();
          this.setState({
            animUp: "fadeInDown",
            animDown: "fadeOutDown",
          });
        }


        return this.state.animationIsFinished;

      }}
      afterLoad={(origin, destination, direction, animPageType) => {

        if(destination.anchor === "/") {
          this.setState({animHome: {
            animType: "fadeInDown",
            animType2: "expandIn",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 2000
          }});
        } else if(destination.anchor === "About") {
         if(direction === "down") {
          this.setState({animAbout: {
            animType: "fadeInUp",
            animType2: "fadeIn",
            animDelay1: 500,
            animDelay2: 700,
          }});
         } else {
          this.setState({animAbout: {
            animType: "fadeInDown",
            animType2: "fadeIn",
            animDelay1: 500,
            animDelay2: 700,
          }});
         }
         } else if (destination.anchor === "Work") {
          if(direction === "down") {
            this.setState({animWork: {
              animType: "fadeInUp",
              animType2: "fadeIn",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          } else {
            this.setState({animWork: {
              animType: "fadeInDown",
              animType2: "fadeIn",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          }
        } else if (destination.anchor === "Contact") {
        
          if(direction === "down") {
            this.setState({animContact: {
              animType: "fadeInUp",
              animType2: "fadeIn",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          } else {
            this.setState({animContact: {
              animType: "fadeInDown",
              animType2: "fadeIn",
              animDelay1: 0,
              animDelay2: 200,
              animDelay3: 0
            }});
          }
        }


        console.log('after load');
        this.setState({ animationIsFinished: false });
        
      }}
      onSlideLeave={(origin, destination, direction, item, id) => {
        
        console.log(destination.index);

        if(destination.index === "1") {
          console.log('we in the work section now');
        }

        console.log(origin);

        if(item == "right") {
          this.setState({animWork: {
            animType: "fadeOutLeft",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 300
          }});
        } else {
          this.setState({animWork: {
            animType: "fadeOutRight",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 300
          }});
        }

        clearTimeout(timeoutId);
        // delaying the next page event so we can add some animations to our page elements
        if (this.state.animationIsFinished == false) {
          timeoutId = setTimeout(() => { 
            this.setState({ animationIsFinished: true });
            
            moveSlideSection(item);
            
          }, this.slideDelay);
        }

        return this.state.animationIsFinished;


      }}
      afterSlideLoad={(origin, destination, direction, item, id) => {


        if(item == "right") {
          this.setState({animWork: {
            animType: "fadeInRight",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 300
          }});
        } else if(item == "left") {
          this.setState({animWork: {
            animType: "fadeInLeft",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 300
          }});
        }

      }}
      render={({  state, fullpageApi, destination, index, direction }) => {

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

        moveSlideSection = (item) => {
          if (item == 'right') {
            fullpageApi.moveSlideRight();
          } else {
            fullpageApi.moveSlideLeft();
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

        moveToSection = (destination) => {
          fullpageApi.moveTo(destination.index, 0);

          console.log('lemme know');
          //this.setState({ animationIsFinished: false });
          enableScroll();
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
            <MySection><Contact animContact={this.state.animContact} /></MySection>
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