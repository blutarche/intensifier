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
    let link = this.refs.download;
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

  getVibrationRatio() {
    return this.vibration / 3.0;
  }

  setScale(ratio) {
    shiftPosition = [];
    var v = Math.sqrt(3) * ratio;
    shiftPosition.push({x: -v, y: 1  * ratio});
    shiftPosition.push({x: v, y: 1 * ratio});
    shiftPosition.push({x: 0 * ratio, y: -2 * ratio});
    middle.x = v;
    middle.y = 1 * ratio;
    lostScale.width = 2 * v;
    lostScale.height = 3 * ratio;
  }

  initValue() {
    this.textSize = 3;
    this.vibration = 3;
    this.interval = 3;
    this.setScale(this.getVibrationRatio());
    maxFrame = shiftPosition.length;
    // this.rangeValue = {min: 0, max: 0, step: 0};
  }

  updatePictureURL(url) {
    this.setState({url: url, imageUploaded: true, downloadURL: ''});
    console.log("URL: "+url);
  }

  updateRangeValue() {
    // this.vibration = {(canvas.height) / this.ratio};
  }

  updatePicture() {
    renderImage.src = this.state.url;
    let self = this;
    renderImage.onload = function() {
      self.updateCanvas();
      self.updateRangeValue();
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
    updateInterval = setInterval(this.updatePosition.bind(this, context), this.getInterval());
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

  getInterval() {
     return (30) / (this.interval / 3.0);
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
    return Math.sqrt(this.textSize) * 0.07 * canvasSize.height;
  }

  drawText(context) {
    var msg = this.text;
    context.font = this.getFontSize() + "px Arial";
    context.lineWidth = 4;
    context.fillStyle = "white";
    context.textAlign = "center";
    context.strokeText(msg, canvasSize.width/2, canvasSize.height-(canvasSize.height/10));
    context.fillText(msg, canvasSize.width/2, canvasSize.height-(canvasSize.height/10));
  }

  rangeInterval(e) {
    console.log(e.target.value);
    this.interval = e.target.value;
    clearInterval(updateInterval);
    updateInterval = setInterval(this.updatePosition.bind(this, context), this.getInterval());
  }

  rangeText(e) {
    this.textSize = e.target.value;
  }

  rangeVibration(e) {
    this.vibration = e.target.value;
    this.setScale(this.getVibrationRatio());
    this.updateCanvas();
  }

  render() {
    return (
      <div className="row">
        <div className={"text-center "+(this.state.imageUploaded ? "col-sm-6" : "col-sm-6 col-sm-offset-3")}>
          <canvas ref="canvas" />
          <FileInput updatePicture={this.updatePictureURL.bind(this)} />
        </div>
        <div className={this.state.imageUploaded ? "col-sm-6" : "hidden"}>
          <form className="form-horizontal">
            <TextInput textChange={this.textInputChange.bind(this)} />
            <RangeInput  rangeChange={this.rangeText.bind(this)} labelText="Text size" min={this.minRange} max={this.maxRange} step={this.stepRange} />
            <RangeInput  rangeChange={this.rangeVibration.bind(this)} labelText="Magnitude" min={this.minRange} max={this.maxRange} step={this.stepRange} />
            <RangeInput  rangeChange={this.rangeInterval.bind(this)} labelText="Speed" min={this.minRange} max={this.maxRange} step={this.stepRange} />
            <Download  downloadGIF={this.downloadGIF.bind(this)} />
            <a ref="download" href="#" download="" className="hidden">Download</a>
          </form>
        </div>
      </div>
    );
  }
};