import React from 'react';


export default class FileInput extends React.Component {
  constructor() {
    super();
    this.fileChange = this.fileChange.bind(this);
  }

  fileChange(e) {
    var reader = new FileReader();
    var file = e.target.files[0];
    this.props.updatePicture(URL.createObjectURL(file));
    window.file = file;
    this.setState({
      nameStyle: {display: "block"}
    });
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label"> 
          <b>Photo</b>
        </label>
        <div className="col-sm-5">
          <button className="btn btn-embossed btn-primary upload">
            <i className="fa fa-picture-o" aria-hidden="true"></i> Upload photo
            <input ref="photo" type="file" name="picture" accept="image/*" onChange={this.fileChange} />
          </button>
        </div>
      </div>
    );
  }
};
