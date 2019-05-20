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
import logo from '../logo.svg';



export const moveDown = (state, fullpageApi) => {
    fullpageApi.moveSectionDown();
};

export class MySection extends Component {


  render=( state, fullpageApi ) => {
    console.log("---=--");
    console.log(this.props.animating);
    console.log(this.props);

    return (
      <div className="section">
        {this.props.children}
      </div>
    );
  }
  handleProp = () => {
    this.props.animAction(!this.props.animating);
  }
}


const anchors = ["/", "About", "Work"];

const Content = (mapStateToProps, mapDispatchToProps) => (



  <ReactFullpage
    anchors={anchors}
    navigationTooltips={anchors}
    onLeave={(origin, destination, direction, item, id, workSection) => {

      console.log("onLeave event", { origin, destination, direction});
      console.log(destination.anchor);


      if(destination.anchor === "/") {
        GLC.changeNumbersAnimHome();
      } else if(destination.anchor === "About") {
        GLC.changeNumbersAnimAbout();
      } else if(destination.anchor === "Work") {
        GLC.changeNumbersAnimWork();
      }
    }}
    onSlideLeave={() => {
        
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>

<img
        src={logo}
        className={
          "App-logo"
        }
        alt="logo"
        onClick={
          MySection.handleProp.bind(this)
        }
      />

          <MySection><Home /></MySection>
          <MySection><About /></MySection>
          <MySection><Work /></MySection>
        </div>
      );
    }}
  />


);



const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  animAction: (payload) => dispatch(animAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps) (Content);