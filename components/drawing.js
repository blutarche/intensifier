var randomMax = 10;
var shiftPosition = 0;
var middleRange = 0;
var img = new Image();

var Drawing = React.createClass({
  getInitialState: function() {
    return {
      url: 'some-url-image'
    };
  },

  componentDidMount: function() {
    img.src = this.state.url;
    middleRange = randomMax / 2;
    var canvas = this.refs.canvas;
    canvas.width = img.width - randomMax;
    canvas.height = img.height - randomMax;
    setInterval(this.updatePosition, 10);
  },

  updatePosition: function() {
    var canvas = this.refs.canvas;
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;  
    var shiftPosition = Math.floor((Math.random() * randomMax) - middleRange);
    var x = -middleRange + shiftPosition;
    var y = -middleRange + shiftPosition;
    var w = width - middleRange;
    var h = height - middleRange;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, x, y);
  },

  render: function() {
    return <canvas ref="canvas" width={300} height={300} />
  }
});

ReactDOM.render(
  <Drawing />,
  document.getElementById('drawing')
);