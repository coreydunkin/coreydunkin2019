import React, { Component } from 'react';
import { connect } from "react-redux";
import animAction from "../../actions/animAction";


const reqSvgs = require.context ('../../images/logos', true, /\.svg$/);

const reqJpgs = require.context ('../../images', true, /\.jpg$/);

const paths = reqSvgs.keys ();
const pathsJpgs = reqJpgs.keys ();

const svgs = paths.map( path => reqSvgs ( path ) );
const jpgs = pathsJpgs.map( path => reqJpgs ( path ) );

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



    const workItem = [
      {
        "id": 1,
        "name": "nbn",
        "title": "NBNco",
        "logo": svgs[6],
        "image": jpgs[3],
        "imagemob": jpgs[8],
        "body": "Angular | SASS | AEM"
      },
      {
        "id": 2,
        "name": "macbank",
        "title": "Macquarie Bank",
        "logo": svgs[4],
        "image": jpgs[1],
        "imagemob": jpgs[6],
        "body": "Angular | SASS | Gulp | AEM"
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
    



    return (
      
    <div className="work page">

    <div class="fp-controlArrow fp-prev">
    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="40px" viewBox="0 0 551.13 551.13" width="40px" class=""><g><path d="m189.451 275.565 223.897-223.897v-51.668l-275.565 275.565 275.565 275.565v-51.668z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g> </svg>
    </div>
    <div class="fp-controlArrow fp-next">
      <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="40px" viewBox="0 0 551.13 551.13" width="40px" class=""><g><path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g> </svg>
    </div>

       {workItem.map((item, i) => 
  
        

            <div className={item.name + " slide"} key={i}>

              <div className="workContainer">

              <div className={"workDesktop animated " + this.state.workAnim}
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}>
                       
                <img alt="workdesktop" data-src={item.image}></img>         
              </div>
                <div className={"workMobile animated " + this.state.workAnim}
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}>
                       
                       <img alt="workmobile" data-src={item.imagemob}></img>  
                       </div>

              <h3 className={'animated ' + this.state.workAnim} 
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}}><span>{item.title}</span></h3> 
             
              <img alt="logo" className={'logo animated ' + this.state.workAnim} 
              style={{ animationDelay: '0ms', 
                       animationDuration: '900ms', 
                       pointerEvents: 'all'}} data-src={item.logo}></img>

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