import React, { Component } from 'react';
import './App.scss';
import WebGL from './WebGL/main';
import Home from './home/main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>

        <WebGL></WebGL>
      </div>
    );
  }
}

export default App;
