var FileInput = React.createClass({
  render: function() {
    return (
      <button className="btn btn-hg btn-embossed btn-primary">
        <i className="fa fa-picture-o" aria-hidden="true"></i> Upload your own photo
        <input className="upload" type="file" name="picture" accept="image/*" />
      </button>
    );
  }
});
ReactDOM.render(
  <FileInput />,
  document.getElementById('fileinput')
);