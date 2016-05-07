var randomMax = 10;

var Drawing = React.createClass({
  getInitialState: function() {
    return {url: 'some-url'};
  },

  componentDidMount: function() {
    var img = new Image();
    img.src = this.state.url;
    this.updateCanvas();
  },

  updateCanvas: function() {
    var ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 300, 300);
  },

  render: function() {
    return <canvas ref="canvas" width={300} height={300}/>
  }
});
ReactDOM.render(
  <Drawing />,
  document.getElementById('drawing')
);