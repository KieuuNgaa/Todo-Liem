import React, { Component } from "react";
import "./EyeBalls.css";


class EyeBalls extends Component {
  constructor(props) {
    super(props);
    this.canvas1 = React.createRef();
  }
  render() {
    const canvas = this.canvas1.current;
    console.log("nga", canvas)
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let eyes = [];
    let theta;

    const mouse = {
      x: undefined,
      y: undefined
    }

    window.addEventListener("mousemove", function (e) {
      mouse.x = this.event.x;
      mouse.y = this.event.y;
    });
    return (
      <div>
        <canvas id="canvas1" ref={this.canvas1}></canvas>
      </div>
    );
  }
}

export default EyeBalls;