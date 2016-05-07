import React from 'react';

var nameStyle = {
  display: "none"
};

export default class FileInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {imageDataURL: ''};
    this.fileChange = this.fileChange.bind(this);
  }
  fileChange(e) {
    var reader = new FileReader();
    var file = e.target.files[0];
    window.file = file;

    console.log(file);
    reader.onloadend = () => {
      this.setState({
        imageDataURL: reader.result
      });
    }

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
