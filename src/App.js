import React, { Component } from 'react';
import './App.scss';
import WebGL from './WebGL/main';
import Nav from './nav/main';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <WebGL></WebGL>

        <Nav></Nav>

      </div>
    );
  }
}

export default App;
