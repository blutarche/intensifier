var Header = React.createClass({
  render: function() {
    return (
      <div className="Header">
        <h3>Intensifier</h3>
        <h6>The most intense gif maker</h6>
      </div>
    );
  }
});

ReactDOM.render(
  <Header />,
  document.getElementById('head')
);