import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { connect } from "react-redux";
import animAction from "../../actions/animAction"
const reqSvgs = require.context ('../../images/logos', true, /\.svg$/);

const reqJpgs = require.context ('../../images', true, /\.jpg$/);

const paths = reqSvgs.keys ();
const pathsJpgs = reqJpgs.keys ();

const svgs = paths.map( path => reqSvgs ( path ) );
const jpgs = pathsJpgs.map( path => reqJpgs ( path ) );

let animDecider;
let workAnim;
let updatedWorkAnim;
class Work extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.  
  constructor(props) {
    super(props);
    this.delay = 1000;
  }

  state = {
    workAnim: "fadeOut"
  };
  
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
   if (prevProps.animWork.animType !== this.props.animWork.animType) {
      this.setState({ workAnim: this.props.animWork.animType });


    }
  }


  render=()=> {

    const clientItem = [
      {
        "id": 3,
        "image": svgs[4],
        "title": "Macquarie"
      },
      {
        "id": 0,
        "image": svgs[5],
        "title": "McDonalds"
      },
      {
        "id": 3,
        "image": svgs[6],
        "title": "NBN"
      },
      {
        "id": 4,
        "image": svgs[9],
        "title": "Telstra"
      },
      {
        "id": 4,
        "image": svgs[10],
        "title": "Volkswagen"
      },
      {
        "id": 1,
        "image": svgs[1],
        "title": "ADF"
      },
    ];

    const skillItem = [
      {
        "id": 1,
        "image": svgs[7],
        "title": "React"
      },
      {
        "id": 5,
        "image": svgs[0],
        "title": "Angular"
      },
      {
        "id": 5,
        "image": svgs[2],
        "title": "HTML"
      },
      {
        "id": 2,
        "image": svgs[11],
        "title": "Vue"
      },
      {
        "id": 0,
        "image": svgs[3],
        "title": "JS"
      },
      {
        "id": 2,
        "image": svgs[8],
        "title": "SASS"
      },
    ];

    const workItem = [
      {
        "id": 1,
        "name": "macbank",
        "title": "Macquarie Bank",
        "logo": svgs[4],
        "image": jpgs[1],
        "imagemob": jpgs[6],
        "body": "Angular | SASS | Gulp | AEM"
      },
      {
        "id": 2,
        "name": "nbn",
        "title": "NBNco",
        "logo": svgs[6],
        "image": jpgs[3],
        "imagemob": jpgs[8],
        "body": "Angular | SASS | AEM"
      },
      {
        "id": 3,
        "name": "adf",
        "title": "Defence Force",
        "logo": svgs[1],
        "image": jpgs[0],
        "imagemob": jpgs[5],
        "body": "Angular | SASS | Gulp"
      },
      {
        "id": 4,
        "name": "mcd",
        "title": "McDonalds",
        "logo": svgs[5],
        "image": jpgs[2],
        "imagemob": jpgs[7],
        "body": "Javascript | SASS | Joomla"
      },
      {
        "id": 5,
        "name": "vw",
        "title": "Volkswagen",
        "logo": svgs[10],
        "image": jpgs[4],
        "imagemob": jpgs[9],
        "body": "Javascript | AEM"
      },
    ]
;
/* 
    <i key={this.props.animWork.animType}>

    <Animated
    animationIn={this.props.animWork.animType}
    animationOut={this.props.animWork.animType}
    animationInDelay={1500}
    animationInDuration={900}
    isVisible={this.props.animating}>
      <span>THIS IS SOME HIDDEN TEXT</span>
    </Animated> 

    </i> 
*/  
    
console.log(this.state.workAnim + " not updated?");



    return (
      
    <div className="work page">

       


       {workItem.map((item, i) => 
  
        

            <div className={item.name + " slide"} key={i}>

              <div className="workContainer">

              <div className={"workDesktop" + " animated " + this.state.workAnim}
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}>
                       
                <img src={item.image}></img>         
              </div>
                <div className={"workMobile" + " animated " + this.state.workAnim}
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}>
                       
                       <img src={item.imagemob}></img>  
                       </div>

              <h3 className={'animated ' + this.state.workAnim} 
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}><span>{item.title}</span></h3> 
             
              <img className={'logo animated ' + this.state.workAnim} 
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}} src={item.logo}></img>

              <p className={'animated ' + this.state.workAnim} 
              style={{ animationDelay: '0ms', 
                       animationDuration: '1500ms', 
                       pointerEvents: 'all'}}> {item.body}</p>



              </div>
              
              


              </div>

       )}
      
         
    
    
    </div>
    );
  }
}



const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  animAction: (payload) => dispatch(animAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps) (Work);