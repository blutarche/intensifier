var FileInput = React.createClass({
  render: function() {
    return (
        <input type="file" name="picture" accept="image/*" />
    );
  }
});
ReactDOM.render(
  <FileInput />,
  document.getElementById('fileinput')
);