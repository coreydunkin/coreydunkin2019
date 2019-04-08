import React, { Component } from 'react';
import './App.css';
import WebGL from './WebGL/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WebGL></WebGL>
      </div>
    );
  }
}

export default App;
