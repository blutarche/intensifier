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
            <b><i className="fa fa-download" aria-hidden="true"></i> Download</b>
        </button>
      </div>
    );
  }
};