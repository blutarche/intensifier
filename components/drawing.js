import React from 'react';

var ratio = 1;
var shiftPosition = [];
var middle = {x: 0, y: 0};
var lostScale = {width: 0, height: 0};
var rotationRound = 0;
var maxFrame = 0;
var renderImage = new Image();
var downloadImage = new Image();
var updateInterval;
var canvas;
var canvasSize = {width: 0, height: 0};
var ctx;

export default class Drawing extends React.Component {
  constructor() {
    super();
    this.initValue();
  }

  initValue() {
    shiftPosition.push({x: -Math.sqrt(3), y: 1});
    shiftPosition.push({x: Math.sqrt(3), y: 1});
    shiftPosition.push({x: 0, y: -2});
    middle.x = Math.sqrt(3);
    middle.y = 1;
    lostScale.width = 2 * Math.sqrt(3);
    lostScale.height = 3;
    maxFrame = shiftPosition.length;
  }

  updatePicture() {
    renderImage.src = this.props.url;
    var self = this;
    renderImage.onload = function() {
      self.updateCanvas();
    }
    console.log(renderImage.src);
    console.log("UpdatePicture --> Image : w = " + renderImage.width + " h = " + renderImage.height);
  }

  componentDidMount() {
    canvas = this.refs.canvas;
    ctx = canvas.getContext('2d');
    this.updatePicture();
    updateInterval = setInterval(this.updatePosition.bind(this), 50);
  } 

  componentDidUpdate() {
    this.updatePicture();
  }

  updateCanvas() {
    console.log("Image : w = " + renderImage.width + " h = " + renderImage.height);
    canvas.width = renderImage.width - lostScale.width;
    canvas.height = renderImage.height - lostScale.height;
    canvasSize = {width: canvas.width, height: canvas.height};
  }

  updatePosition() {
    var shift = shiftPosition[rotationRound];
    var x = -middle.x + shift.x;
    var y = -middle.y + shift.y;
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.drawImage(renderImage, x, y);
    rotationRound = (rotationRound + 1) % maxFrame;
  }

  render() {
    return (
      <div className="row">
        <div className="text-center col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <canvas ref="canvas" />
        </div>
      </div>
    )
  }
};