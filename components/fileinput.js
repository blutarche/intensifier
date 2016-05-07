import React from 'react';

export default class FileInput extends React.Component {
  constructor() {
    super();
    this.state = {imageDataURL: ''};
    this.fileChange = this.fileChange.bind(this);
  }

  fileChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="text-center">
  		  <button className="btn btn-hg btn-embossed btn-primary upload">
  			<i className="fa fa-picture-o" aria-hidden="true"></i> Upload your own photo
  			<input type="file" name="picture" accept="image/*" onChange={this.fileChange} />
  		  </button>
      </div>
    );
  }
};
