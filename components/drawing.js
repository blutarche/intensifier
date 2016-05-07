import React from 'react';

var randomMax = 3;
var shiftPosition = 0;
var middleRange = 0;
var img = new Image();

export default class Drawing extends React.Component {
  constructor() {
    super();
    this.state = {url: 'https://graph.facebook.com/1021235868/picture?width=500'};
  }

  componentWillMount() {
    img.src = this.state.url;
  }

  componentDidMount() {
    middleRange = randomMax / 2;
    setInterval(this.updatePosition.bind(this), 10);
  }

  updatePosition() {
    var canvas = this.refs.canvas;
    canvas.width = img.width - randomMax;
    canvas.height = img.height - randomMax;
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var shiftPositionX = Math.floor((Math.random() * randomMax) - middleRange);
    var shiftPositionY = Math.floor((Math.random() * randomMax) - middleRange);
    var x = -middleRange + shiftPositionX;
    var y = -middleRange + shiftPositionY;
    var w = width - middleRange;
    var h = height - middleRange;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, x, y);
  }

  render() {
    return (
      <div className="text-center">
        <canvas ref="canvas" width={300} height={300} />
      </div>
    )
  }
};