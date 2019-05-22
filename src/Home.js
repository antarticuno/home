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

let canvas =
  <div>
    <Stage width={1024} height={700}>
      <Layer>
        <Line points={[400, 800, 1000, -100, 200, 800]} closed fill="black" onClick={() => {alert("i was clicked")}}/>
        <Line points={[0, 800, 1000, -100, 0, 600]} closed fill="black" onClick={() => {alert("i was clicked")}}/>
        <Line points={[0, 450, 1000, -100, 0, 300]} closed fill="black" onClick={() => {alert("i was clicked")}}/>
        <Line points={[0, 150, 1000, -75, 0, 25]} closed fill="black" onClick={() => {alert("i was clicked")}}/>
      </Layer>
    </Stage>
  </div>;

const Home = ({history}) =>
  <div>
    <div>
      {canvas}

    </div>
  </div>;


export default Home