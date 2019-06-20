import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Kinetic from 'kinetic';
import {Stage, Layer, Circle, Line, Image} from 'react-konva';
import useImage from 'use-image';
import {fetchJSON} from "./utils/communication";
import _ from 'lodash';
import skyline from './img/skyline.png';
import antartikun from './img/antartikun.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      length: null,
      tick: 0,
      color: {r: 0, g: 0, b: 0},
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
/*    if (this.state.tick % 1 == 0) {
      color = this.getRandomColor();
      this.setState(_.assign({}, this.state, {color: color}));
    }*/
    this.setState(_.assign({}, this.state, {tick: this.state.tick+1}));
  }



  quad(degree) {
    let roundDegree = degree % 360;
    if (roundDegree >= 0 && roundDegree <= 90) return 1;
    if (roundDegree > 90 && roundDegree <= 180) return 2;
    if (roundDegree > 180 && roundDegree <= 270) return 3;
    if (roundDegree > 270 && roundDegree < 360) return 4;
  }

  async componentDidMount() {
    this.setSize();

  }

  setSize() {
    this.setState(_.assign({}, this.state, {width: window.innerWidth, height: window.innerHeight, length: this.state.width*1.5}));
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    let body = document.getElementsByTagName("body");
    body.onresize = function(){alert("resized")};
    let root = document.getElementById("root");




    let width = this.state.width;
    let height = this.state.height;
    let length = width* 1.3;
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

    let canvas = <div id="container">
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
      </Stage>
      <Welcome />
    </div>;


    return canvas;
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  randomPage() {
    let pages = ["/about", "/gallery", "/projects"];
    let random = Math.floor(Math.random() * 3);
    return pages[random];
  }

  render() {
    return <div id="welcome">
      <div class="icon"></div>
      <h1>
        <span class="left">Welcome</span>
        <Link to={this.randomPage()} title="Go to a random page!"><img src={antartikun} alt="explore antarticuno"/></Link>
        <span class="right">Home</span>
      </h1>
    </div>;
  }
}

export default Home