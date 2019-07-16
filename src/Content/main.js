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

let moveDown;
let moveUp;
let timeoutId;

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
    animationIsFinished: false
  };

  render=()=> {
    return (
      <div>

      <ReactFullpage
      anchors={anchors}
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction, item, id, goinDown, animationIsFinished) => {

        console.log(this.state.animationIsFinished);
        let moveSection = 'move' + direction;
        
        clearTimeout(timeoutId);

        if (this.state.animationIsFinished == false) {
          timeoutId = setTimeout(() => { 
            this.setState({ animationIsFinished: true });
            if (direction == 'up') {
              moveUp();
            } else {
              moveDown();
            }
          }, this.delay);
        }



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


        return this.state.animationIsFinished;

      }}
      afterLoad={(origin, destination, direction, goinDown) => {

      }}
      onSlideLeave={(origin, destination, direction, item, id) => {
        console.log(item);
      }}
      render={({ state, fullpageApi, destination, index }) => {
        

        moveDown = () => {
          fullpageApi.moveSectionDown();
          this.setState({ animationIsFinished: false });
        };

        moveUp = () => {
          fullpageApi.moveSectionUp();
          this.setState({ animationIsFinished: false });
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