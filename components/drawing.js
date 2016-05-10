import React from 'react';

var randomMax = 2;
var shiftPosition = 0;
var middleRange = 0;
var img = new Image();
var ouputImage = new Image();
var rotationRound = 0;
var maxFrame = 3;

export default class Drawing extends React.Component {
  constructor() {
    super();
    shiftPosition = randomMax;
    middleRange = randomMax / 2;
  }

  componentDidMount() {
    this.drawingPicture();
    setInterval(this.updatePosition.bind(this), 50);
  }

  drawingPicture() {
    img.src = this.props.url;
  }

  componentDidUpdate() {
    this.drawingPicture();
  }

  updatePosition() {
    var canvas = this.refs.canvas;
    canvas.width = img.width - randomMax;
    canvas.height = img.height - randomMax;
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    shiftPosition *= -1;
    var shiftPositionX = randomMax * Math.cos(Math.PI * 2 * rotationRound / maxFrame);
    var shiftPositionY = randomMax * Math.sin(Math.PI * 2 * rotationRound / maxFrame);
    var x = -middleRange + shiftPositionX;
    var y = -middleRange + shiftPositionY;
    var w = width - middleRange;
    var h = height - middleRange;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, x, y);
    rotationRound = (rotationRound + 1) % maxFrame;
  }

  render() {
    return (
      <div className="text-center">
        <canvas ref="canvas" width={300} height={300} />
      </div>
    )
  }
};