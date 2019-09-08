import React, { Component } from 'react';
import Home from './home/main';
import About from './about/main';
import Work from './work/main';
import Contact from './contact/main';
import Sidebar from "react-sidebar";

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import GLC from '../WebGL/GLCommander/index.js';
import ReactFullpage from '@fullpage/react-fullpage';
import { connect } from "react-redux";
import animAction from "../actions/animAction";
import animIn from "../actions/animIn";
import animOut from "../actions/animOut";


let moveSlideSection;
let moveSection;
let timeoutId;
let disableScroll;
let enableScroll;
let moveToSection;

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

const anchors = ["/", "About", "Work", "Contact"];

class Content extends Component {
  constructor(props) {
    super(props);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.delay = 700;
    this.slideDelay = 850;
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
      
      <button className={"scroll-up animated " + this.state.animUp} 
      style={{ animationDelay: '200ms',  
               animationDuration: '500ms'}} onClick={() => moveSection("up")}>
               <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="25px" viewBox="0 0 551.13 551.13" width="25px" class=""><g><path d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g> </svg>

               </button>  
      
      <button className={"scroll-down animated " + this.state.animDown}
      style={{ animationDelay: '200ms', 
               animationDuration: '500ms'}} onClick={() => moveSection("down")}>
               <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="25px" viewBox="0 0 551.13 551.13" width="25px" class=""><g><path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g> </svg>         
      </button> 

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
              <a onClick={() => {this.onSetSidebarOpen(false); GLC.changeNumbersAnimContact()}} href="#Contact"><sup>4</sup> CONTACT</a>
            </li>
          </ul>
        }
        open={this.state.sidebarOpen}
        pullRight={true}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "transparent" } }}
        >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        </Sidebar>
      <ReactFullpage
      anchors={anchors}
      controlArrows={false}
      dragAndMove={true}
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction) => {
        // add some logic to check if the page you want to go to is 
        // more than 2 page away, using this for animation checks
        let incrementValue = destination.index - origin.index;

        console.log(incrementValue);
        console.log(destination);

        if(incrementValue >100) {          
          handleAnimInUp();
          handleAnimInDown();
          handleAnimOutUp();
          handleAnimOutDown();
        }

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
          if (this.state.animationIsFinished === false) {
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
          GLC.changeNumbersAnimContact();
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
          if (destination.item.baseURI.includes("/1")) {
            console.log('mac');
            GLC.changeNumbersAnimMac();
          } else if (destination.item.baseURI.includes("/2")) {
            console.log('adf');
            GLC.changeNumbersAnimAdf();
          } else if (destination.item.baseURI.includes("/3")) {
            console.log('mcd');
            GLC.changeNumbersAnimMcd();
          } else if (destination.item.baseURI.includes("/4")) {
            console.log('vw');
            GLC.changeNumbersAnimVw();
          } else {
            console.log('nbn');
            GLC.changeNumbersAnimNbn();
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



        this.setState({ animationIsFinished: false });
        
      }}
      onSlideLeave={(origin, destination, direction, item) => {

/*
       console.log(origin);

        let numSlide = origin.item.baseURI;

        console.log(numSlide);

        if (destination.item.baseURI.includes("/1")) {
          console.log('nbn');
        } else if (destination.item.baseURI.includes("/2")) {
          console.log('adf');
        } else if (destination.item.baseURI.includes("/3")) {
          console.log('mcd');
        } else if (destination.item.baseURI.includes("/4")) {
          console.log('vw');
        } else {
          console.log('mac');
        }
*/


        if(destination.index === 0 && item === "right") {
          console.log('macbank');
          GLC.changeNumbersAnimMac();
        } else if(destination.index === 1 && item === "right") {
          console.log('adf');
          GLC.changeNumbersAnimAdf();
        } else if(destination.index === 2 && item === "right") {
          console.log('mcd');
          GLC.changeNumbersAnimMcd();
        } else if(destination.index === 3 && item === "right") {
          console.log('vw');
          GLC.changeNumbersAnimVw();
        } else if(destination.index === 4 && item === "right") {
          console.log('nbn');
          GLC.changeNumbersAnimNbn();
        } 

        if(destination.index === 4 && item === "left") {
          console.log('mcd');
          GLC.changeNumbersAnimMcd();

        } else if(destination.index === 3 && item === "left") {
          console.log('adf');
          GLC.changeNumbersAnimAdf();

        } else if(destination.index === 2 && item === "left") {
          console.log('macbank');
          GLC.changeNumbersAnimMac();

          

        } else if(destination.index === 1 && item === "left") {
          
          console.log('nbn');
          GLC.changeNumbersAnimNbn();
          
        } else if(destination.index === 0 && item === "left") {
          console.log('vw');
          GLC.changeNumbersAnimVw();

        }         


        if(item === "right") {
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
        if (this.state.animationIsFinished === false) {
          timeoutId = setTimeout(() => { 
            
            
 

            
            this.setState({ animationIsFinished: true });
            
            moveSlideSection(item);
            
          }, this.slideDelay);
        }

        return this.state.animationIsFinished;


      }}
      afterSlideLoad={(origin, destination, direction, item, id) => {



        if(item === "right") {
          this.setState({animWork: {
            animType: "fadeInRight",
            animDelay1: 0,
            animDelay2: 200,
            animDelay3: 300
          }});
        } else if(item === "left") {
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
          if (direction === 'up') {
            fullpageApi.moveSectionUp();
          } else {
            fullpageApi.moveSectionDown();
          }
          this.setState({ animationIsFinished: false });
          enableScroll();
        };

        moveSlideSection = (item) => {
          if (item === 'right') {
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