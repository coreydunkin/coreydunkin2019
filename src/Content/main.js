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
let delay = 2000; 
let timeoutId;
let animationIsFinished = false;
let handleProp
let moveDown



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

  render=()=> {
    return (
        <div>

      <ReactFullpage
      anchors={anchors}
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction, item, id) => {
        let curTime = new Date().getTime();
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function(){
          animationIsFinished = true;
          moveDown();
        }, delay);
        
  
        if(destination.anchor === "/") {
          GLC.changeNumbersAnimHome();
          this.handleAnimOut();
        } else if(destination.anchor === "About") {
          GLC.changeNumbersAnimAbout();
          this.handleAnimOut();
        } else if(destination.anchor === "Work") {
          GLC.changeNumbersAnimWork();
          this.handleAnimIn();
        }
        
        return animationIsFinished;

      }}
      onSlideLeave={(origin, destination, direction, item, id) => {
        console.log(item);
      }}
      render={({ state, fullpageApi, destination, index }) => {
        console.log(state);
        console.log(fullpageApi);

        moveDown = () => {
          fullpageApi.moveTo(destination.index + 1);
        };
      

        return (
          <div>
            <MySection><Home /></MySection>
            <MySection><About /></MySection>
            <MySection><Work /></MySection>
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