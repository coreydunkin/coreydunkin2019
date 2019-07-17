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

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let keys = {37: 1, 38: 1, 39: 1, 40: 1};

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
    animType: "fadeIn",
    animDurationFirst: 500,
    animDurationSecond: 1000
  };

  render=()=> {
    return (
      <div>

      <ReactFullpage
      anchors={anchors}
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction) => {

        console.log(this.state.animationIsFinished);

        // we disable the scroll so that the moveSection method can finish
        // this needs to be done for animation purposes to run
        disableScroll();

        clearTimeout(timeoutId);
        // delaying the next page event so we can add some animations to our page elements
        if (this.state.animationIsFinished == false) {
          timeoutId = setTimeout(() => { 
            this.setState({ animationIsFinished: true });
            moveSection(direction);
          }, this.delay);
        }

        console.log(origin);
        console.log(destination);

        this.handleAnimOut();
        this.handleAnimInUp();
/*
        if(origin.index < destination.index) {
          console.log('anim');
          console.log(this.props.animating);
        }
*/
        if(destination.anchor === "/") {
          GLC.changeNumbersAnimHome();
          /*if (direction == 'down') {
            this.handleAnimOut();
          } else {
            this.handleAnimIn();
          }*/
          
        } else if(destination.anchor === "About") {
          GLC.changeNumbersAnimAbout();
          /*if (direction == 'down') {
            this.handleAnimOut();
          } else {
            this.handleAnimIn();
          }       */ 
        } else if(destination.anchor === "Work") {
          GLC.changeNumbersAnimWork();
          /*if (direction == 'down') {
            this.handleAnimOut();
          } else {
            this.handleAnimIn();
          }*/
        }


        return this.state.animationIsFinished;

      }}
      afterLoad={(origin, destination, direction) => {

        this.handleAnimIn();
        this.handleAnimOutUp();

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
        
        return (
          <div>
            <MySection><Home animType={this.state.animType} /></MySection>
            <MySection><About animType={this.state.animType} /></MySection>
            <MySection><Work animType={this.state.animType} /></MySection>
          </div>
        );
      }}
    />
    </div>
    );


  }

  handleAnimOutUp = () => {
    this.setState({ animType: "fadeOutUp" });
  }

  handleAnimOutDown = () => {
    this.setState({ animType: "fadeOutDown" });
  }

  handleAnimInUp = () => {
    this.setState({ animType: "fadeInUp" });
  }

  handleAnimOutUp = () => {
    this.setState({ animType: "fadeOutUp" });
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