import React, { Component } from 'react';
import './App.css';
import WebGL from './WebGL/main';
import ToggleButton from './buttons/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WebGL></WebGL>
        <ToggleButton></ToggleButton>
      </div>
    );
  }
}

export default App;
