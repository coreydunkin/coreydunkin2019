import React, { Component } from 'react';
import Home from './home/main';
import About from './about/main';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import GLC from '../WebGL/GLCommander/index.js';
import {Animated} from "react-animated-css";
import ReactFullpage from '@fullpage/react-fullpage';

export const moveDown = (state, fullpageApi) => {
    fullpageApi.moveSectionDown();
};

class MySection extends React.Component {
  render=( state, fullpageApi ) => {
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
      }
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      let moveDown = () => {
        console.log('hello!');
      };

      return (
        <div>
          <MySection><Home /></MySection>
          <MySection><About /></MySection>
          <MySection>"Third page, nothing to see here."</MySection>
        </div>
      );
    }}
  />
);

export default Content;