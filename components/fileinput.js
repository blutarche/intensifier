import React from 'react';

var nameStyle = {
  display: "none"
};

export default class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileChange = this.fileChange.bind(this);
  }
  fileChange(e) {
    console.log("WTFFF");
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function(upload) {
      this.setState({
        data_uri: upload.target.result,
      });
    }

    console.log(file);
    reader.readAsDataURL(file);
  }
  render() {
    return (
      <div className="text-center">
        <div className="fileName" style={nameStyle}>
          <b>Current picture:</b> <span></span>
        </div>
        <button className="btn btn-hg btn-embossed btn-primary upload">
          <i className="fa fa-picture-o" aria-hidden="true"></i> Upload your own photo
          <input ref="photo" type="file" name="picture" accept="image/*" onChange={this.fileChange} />
        </button>
      </div>
    );
  }
};
