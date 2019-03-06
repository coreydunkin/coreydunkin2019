import React, { Component } from 'react';
import init from './init/index.js';

class WebGL extends Component {

    componentDidMount() {
        init('webgl');
    }

    render() {
        return <canvas id="webgl" width="400" height="400" style={{border: '1px solid black'}}></canvas>
    }
}

export default WebGL;
