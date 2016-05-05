var Header = React.createClass({
  render: function() {
    return (
        <div className="Header">
            <h2>Intensifies</h2>
            <h3>The most intense gif maker</h3>
        </div>
    );
  }
});
ReactDOM.render(
  <Header />,
  document.getElementById('head')
);