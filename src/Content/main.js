import React, { Component } from 'react';
import Home from './home/main';
import About from './about/main';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import GLC from '../WebGL/GLCommander/index.js';
import {Animated} from "react-animated-css";
import ReactFullpage from '@fullpage/react-fullpage';



class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        {this.props.children}
      </div>
    );
  }
}

const anchors = ["/", "About", "Portfolio", "Contact"];

const Content = () => (
  <ReactFullpage
    anchors={anchors}
    navigationTooltips={anchors}
    onLeave={(origin, destination, direction, item, id) => {
      console.log("onLeave event", { origin, destination, direction});
      console.log(destination.anchor);

      if(destination.anchor == "/") {
        GLC.changeNumbersPumpkin();
      } else if(destination.anchor == "About") {
        GLC.changeNumbersAnim();
      } else {
        GLC.changeNumbersSpooky();
      }
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <MySection><Home /></MySection>
          <MySection><About /></MySection>
          <MySection>"This is some 3rd content"</MySection>
        </div>
      );
    }}
  />
);

export default Content;