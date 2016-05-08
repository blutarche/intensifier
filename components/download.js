import React from 'react';

export default class Download extends React.Component {
  constructor() {
  	super();
  }

  onClick(e) {
    alert("Download Clicked");
  }

  render() {
    return (
      <div className="text-center" style={{"marginTop": "5px"}} >
        <button className="btn btn-hg btn-danger upload" onClick={this.onClick.bind(this)} >
            <i className="fa fa-download" aria-hidden="true"></i> Download
        </button>
      </div>
    );
  }
};