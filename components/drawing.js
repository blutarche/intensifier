import React from 'react';
import FileInput from './fileinput';
import TextInput from './textinput';
import Download from './download';
import RangeInput from './rangeinput';

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
var context;
var canvasSize = {width: 0, height: 0};
var downloadURL = ""

export default class Drawing extends React.Component {
  constructor() {
    super();
    this.initValue();
    this.text = '';
    this.state = {
      url: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg',
      imageUploaded: false,
      downloadURL: ''
    };
    downloadURL = this.state.downloadURL;
  }

  downloadURI(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
  }

  downloadGIF() {
    let uri = this.generateGIF();
    this.gifComplete(uri);
    this.downloadURI(downloadURL, "intensifier.gif");
  }

  gifComplete(url) {
    downloadURL = url;
  }

  textInputChange(value) {
    this.text = value;
    console.log(this.text);
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
    this.vibration = 3;
    this.textSize = 3;
  }

  updatePictureURL(url) {
    this.setState({url: url, imageUploaded: true, downloadURL: ''});
    console.log("URL: "+url);
  }

  updatePicture() {
    renderImage.src = this.state.url;
    let self = this;
    renderImage.onload = function() {
      self.updateCanvas();
    }
  }

  componentDidUpdate() {
    this.updatePicture();
  }

  initCanvas() {
    canvas = this.refs.canvas;
    context = canvas.getContext('2d');
  }

  componentDidMount() {
    this.initCanvas();
    this.updatePicture();
    updateInterval = setInterval(this.updatePosition.bind(this, context), 30);
  } 

  updateCanvas() {
    canvas.width = renderImage.width - lostScale.width;
    canvas.height = renderImage.height - lostScale.height;
    canvasSize = {width: canvas.width, height: canvas.height};
  }

  generateGIF() {
    let downloadCanvas = document.createElement('canvas');
    downloadCanvas.width = canvas.width;
    downloadCanvas.height = canvas.height;
    let downloadContext = downloadCanvas.getContext('2d');
    let encoder = new GIFEncoder();
    encoder.setRepeat(0);
    encoder.setDelay(30);
    encoder.start();

    for (var i = 0; i < maxFrame; i++) {
      this.updatePosition(downloadContext);
      encoder.addFrame(downloadContext);
    }

    encoder.finish();
    // document.getElementById('imageTagID').src = 'data:image/gif;base64,'+encode64(encoder.stream().getData());
    return 'data:image/gif;base64,'+encode64(encoder.stream().getData());
  }

  updatePosition(context, isGenGIF) {
    var shift = shiftPosition[rotationRound];
    var x = -middle.x + shift.x;
    var y = -middle.y + shift.y;
    context.clearRect(0, 0, canvasSize.width, canvasSize.height);
    context.drawImage(renderImage, x, y);
    rotationRound = (rotationRound + 1) % maxFrame;

    this.drawText(context);
  }

  getFontSize() {
    console.log("value = " + this.textSize);
    return this.textSize * 50;
  }

  drawText(context) {
    var msg = this.text;
    context.font = this.getFontSize() + "px Arial";
    context.lineWidth = 4;
    context.fillStyle = "white";
    context.textAlign = "center";
    context.strokeText(msg, canvasSize.width/2, canvasSize.height-50);
    context.fillText(msg, canvasSize.width/2, canvasSize.height-50);
  }

  rangeVibration(e) {
    console.log(e.target.value);
    this.vibration = e.target.value;
  }

  rangeText(e) {
    this.textSize = e.target.value;
  }

  render() {
    return (
      <div className="row">
        <div className="text-center col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <canvas ref="canvas" />
        </div>
        <div className="col-xs-12">
          <form className="form-horizontal">
            <FileInput updatePicture={this.updatePictureURL.bind(this)} />
            <TextInput textChange={this.textInputChange.bind(this)} shouldShow={this.state.imageUploaded}/>
            <RangeInput shouldShow={this.state.imageUploaded} rangeChange={this.rangeVibration.bind(this)} labelText="Vibration" min={this.minRange} max={this.maxRange} step={this.stepRange} />
            <RangeInput shouldShow={this.state.imageUploaded} rangeChange={this.rangeText.bind(this)} labelText="TextSize" min={this.minRange} max={this.maxRange} step={this.stepRange} />
            <Download shouldShow={this.state.imageUploaded} downloadGIF={this.downloadGIF.bind(this)} />
          </form>
        </div>
      </div>
    );
  }
};