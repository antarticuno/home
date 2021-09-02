import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Stage as KonvaStage, Layer as KonvaLayer, Circle as KonvaCircle, Line as KonvaLine} from 'react-konva';
import _ from 'lodash';
import antartikun from './img/antartikun.png';
import bg from './img/home_bg.jpg';

class CircleImage extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener('load', this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };
  render() {
    return (
        <KonvaCircle
            x={this.props.x}
            y={this.props.y}
            radius={this.props.radius}
            fillPatternImage={this.state.image}
            fillPatternScale={{x: .6, y:.6}}
            ref={node => {
              this.imageNode = node;
            }}
        />
    );
  }
}

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
      <KonvaStage width={width} height={height} id="stage">
        <KonvaLayer>
          <KonvaLine points={points1} closed fill={color} />
          <KonvaLine points={points2} closed fill={color} />
          <KonvaLine points={points3} closed fill={color} />
          <KonvaLine points={points4} closed fill={color} />
          <KonvaLine points={points5} closed fill={color} />
          <KonvaLine points={points6} closed fill={color} />
          <KonvaLine points={points7} closed fill={color} />
          <KonvaLine points={points8} closed fill={color} />
          <KonvaLine points={points9} closed fill={color} />
          <KonvaLine points={points10} closed fill={color} />
          <KonvaLine points={points11} closed fill={color} />
          <KonvaLine points={points12} closed fill={color} />
        </KonvaLayer>
        <KonvaLayer>
          <CircleImage x={width} y={0} radius={width*.2} src={bg} />
        </KonvaLayer>
      </KonvaStage>;


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