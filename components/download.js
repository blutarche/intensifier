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
      <div className={this.props.shouldShow ? "text-center" : "hidden"} style={{"marginTop": "5px"}} >
        <button className="btn btn-hg btn-success btn-embossed upload" onClick={this.onClick.bind(this)} >
            <b><i className="fa fa-download" aria-hidden="true"></i> Download</b>
        </button>
      </div>
    );
  }
};