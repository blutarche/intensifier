import React from 'react';


export default class FileInput extends React.Component {
  constructor() {
    super();
    this.state = {
      imageName: '',
      nameStyle: {display: "none"}
    };
    this.fileChange = this.fileChange.bind(this);
  }

  fileChange(e) {
    var reader = new FileReader();
    var file = e.target.files[0];
    this.props.updatePicture(URL.createObjectURL(file));
    window.file = file;
    this.setState({
      imageName: file.name,
      nameStyle: {display: "block"}
    });
  }

  render() {
    return (
      <div className="text-center">
        <div className="fileName" style={this.state.nameStyle}>
          <b>Current picture:</b> <span>{this.state.imageName}</span>
        </div>
        <button className="btn btn-hg btn-embossed btn-primary upload">
          <i className="fa fa-picture-o" aria-hidden="true"></i> Upload photo
          <input ref="photo" type="file" name="picture" accept="image/*" onChange={this.fileChange} />
        </button>
      </div>
    );
  }
};
