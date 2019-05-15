import React, { Component } from 'react';
import Home from './home/main';
import About from './about/main';
import Work from './work/main';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import GLC from '../WebGL/GLCommander/index.js';
import ReactFullpage from '@fullpage/react-fullpage';



export const moveDown = (state, fullpageApi) => {
    fullpageApi.moveSectionDown();
};

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

const Content = () => (
 
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
    onSlideLeave={(section, origin, destination, direction) => {
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
      

      return (
        <div>
          <MySection><Home /></MySection>
          <MySection><About /></MySection>
          <MySection><Work /></MySection>
        </div>
      );
    }}
  />
);


export default Content;