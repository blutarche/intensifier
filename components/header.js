var Header = React.createClass({
  render: function() {
    return (
        <div className="Header">
            <h1>Intensifies</h1>
            <h2>The most intense gif maker</h2>
        </div>
    );
  }
});
ReactDOM.render(
  <Header />,
  document.getElementById('head')
);