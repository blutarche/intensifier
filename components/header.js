var Header = React.createClass({
  render: function() {
    return (
        <div className="Header">
            <h3>Intensifies</h3>
            <h4>The most intense gif maker</h4>
        </div>
    );
  }
});

ReactDOM.render(
  <Header />,
  document.getElementById('head')
);