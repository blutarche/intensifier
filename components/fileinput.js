import React from 'react';


export default class FileInput extends React.Component {
  constructor() {
    super();
    this.fileChange = this.fileChange.bind(this);
    this.fixFirefox = this.fixFirefox.bind(this);
  }

  fileChange(e) {
    var reader = new FileReader();
    var file = e.target.files[0];
    let url;
    if (file) {
      url = URL.createObjectURL(file);
      console.log("fileChange URL: "+url);
      this.props.updatePicture(url);
      window.file = file;
    }
  }

  fixFirefox(e) {
    this.refs.photo.click();
  }

  render() {
    return (
      <div className="form-group">
        <div className="text-center">
          <button type="button" className="btn btn-embossed btn-primary upload" onClick={this.fixFirefox}>
            <i className="fa fa-picture-o" aria-hidden="true"></i> Upload photo
          </button>
          <input className="hidden" id="photo" ref="photo" type="file" name="picture" accept="image/*" onChange={this.fileChange} />
        </div>
      </div>
    );
  }
};
