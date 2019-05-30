import React from 'react';
import {Stage, Layer, Circle, Line} from 'react-konva';

class HomeGraphic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


}

let root = document.getElementById("root");
console.log(root);

let x_offset = .5;
let y_offset = .5;
let scale = 1224;
let width = 1224;
let height = 700;

let canvas =
    <Stage width={width} height={height} id="stage">
      <Layer>
        <Line points={[width, 0, (x_offset - 1)*scale, 0*scale, (x_offset  - .966)*scale, .259*scale]} closed fill="black" />
        <Line points={[width, 0, (x_offset  - .866)*scale, .5*scale, (x_offset  - .707)*scale, .707*scale]} closed fill="black" />
        <Line points={[width, 0, (x_offset  - .5)*scale, .866*scale, (x_offset  - .259)*scale, .966*scale]} closed fill="black" />
      </Layer>
    </Stage>;

const Home = ({history}) =>
      canvas;


export default Home