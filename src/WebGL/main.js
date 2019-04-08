import React, { Component } from 'react';
import init from './init/index.js';

class WebGL extends Component {

    componentDidMount() {
        init('webgl');
    }

    render() {
        return <canvas id="webgl"></canvas>
    }
}

export default WebGL;
