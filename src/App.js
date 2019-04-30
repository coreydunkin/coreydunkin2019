import React, { Component } from 'react';
import './App.scss';
import WebGL from './WebGL/main';
import Content from './Content/main';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <WebGL></WebGL>

        <Content></Content>

      </div>
    );
  }
}

export default App;
