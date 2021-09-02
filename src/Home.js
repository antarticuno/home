import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Stage, Layer, Circle, Line, Image} from 'react-konva';
import _ from 'lodash';
import antartikun from './img/antartikun.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      length: null,
      tick: 0,
      color: '#FFFFFF',
      points: {
        points1: [0, 15],
      points2: [30, 45],
      points3: [60, 75],
      points4: [90, 105],
      points5: [120, 135],
      points6: [150, 165],
      points7: [180, 195],
      points8: [210, 225],
      points9: [240, 255],
      points10: [270, 285],
      points11: [300, 315],
      points12: [330, 345]},
    };
    this.interval =
      window.setInterval(this.tick.bind(this), 100);
  }

  tick() {
    for (let key in this.state.points) {
      let degrees = this.state.points[key];
      degrees[0] += 0.2;
      degrees[1] += 0.2;
      this.setState(_.assign({}, this.state.points, {degrees}));
    }
    let color = this.state.color;
    this.setState(_.assign({}, this.state, {tick: this.state.tick+1}));
  }

  componentWillMount() {
    this.setSize();
  }

  componentDidMount() {
    this.setSize();
    window.addEventListener("resize", this.setSize.bind(this));
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
    window.removeEventListener("resize", this.setSize.bind(this));
  }

  setSize() {
    this.setState(_.assign({}, this.state, {width: window.innerWidth, height: window.innerHeight, length: this.state.width*1.5}));
  }

  render() {
    let width = this.state.width;
    let height = this.state.height;

    let length = Math.max(height, width) * 1.5;
    let color = this.state.color;

    function getXYPoint(degree) {
      let radian = degree * Math.PI / 180;
      let x = length * Math.cos(radian);
      let y = length * Math.sin(radian);
      return [x+width, y*-1];
    }

    let points1 = [this.state.width, 0].concat(getXYPoint(this.state.points.points1[0])).concat(getXYPoint(this.state.points.points1[1]));
    let points2 = [this.state.width, 0].concat(getXYPoint(this.state.points.points2[0])).concat(getXYPoint(this.state.points.points2[1]));
    let points3 = [this.state.width, 0].concat(getXYPoint(this.state.points.points3[0])).concat(getXYPoint(this.state.points.points3[1]));
    let points4 = [this.state.width, 0].concat(getXYPoint(this.state.points.points4[0])).concat(getXYPoint(this.state.points.points4[1]));
    let points5 = [this.state.width, 0].concat(getXYPoint(this.state.points.points5[0])).concat(getXYPoint(this.state.points.points5[1]));
    let points6 = [this.state.width, 0].concat(getXYPoint(this.state.points.points6[0])).concat(getXYPoint(this.state.points.points6[1]));
    let points7 = [this.state.width, 0].concat(getXYPoint(this.state.points.points7[0])).concat(getXYPoint(this.state.points.points7[1]));
    let points8 = [this.state.width, 0].concat(getXYPoint(this.state.points.points8[0])).concat(getXYPoint(this.state.points.points8[1]));
    let points9 = [this.state.width, 0].concat(getXYPoint(this.state.points.points9[0])).concat(getXYPoint(this.state.points.points9[1]));
    let points10 = [this.state.width, 0].concat(getXYPoint(this.state.points.points10[0])).concat(getXYPoint(this.state.points.points10[1]));
    let points11 = [this.state.width, 0].concat(getXYPoint(this.state.points.points11[0])).concat(getXYPoint(this.state.points.points11[1]));
    let points12 = [this.state.width, 0].concat(getXYPoint(this.state.points.points12[0])).concat(getXYPoint(this.state.points.points12[1]));

    //sconsole.log(points12);

    let canvas =
      <Stage width={width} height={height} id="stage">
        <Layer>
          <Line points={points1} closed fill={color} />
          <Line points={points2} closed fill={color} />
          <Line points={points3} closed fill={color} />
          <Line points={points4} closed fill={color} />
          <Line points={points5} closed fill={color} />
          <Line points={points6} closed fill={color} />
          <Line points={points7} closed fill={color} />
          <Line points={points8} closed fill={color} />
          <Line points={points9} closed fill={color} />
          <Line points={points10} closed fill={color} />
          <Line points={points11} closed fill={color} />
          <Line points={points12} closed fill={color} />
        </Layer>
      </Stage>;


    return <div id="container">
      {canvas}
      <Welcome />
    </div>;
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div id="welcome" className="overlay">
      <h1>
        <p className="left"><Link to="/about">Brendan Yang</Link></p>
        <a href="https://github.com/antarticuno" target="_blank" rel="noopener noreferrer"><img src={antartikun} alt="explore antarticuno"/></a>
        <p className="right"><a href="https://instagram.com/antarticuno" target="_blank" rel="noopener noreferrer">@antarticuno</a></p>
      </h1>
    </div>;
  }
}

export default Home