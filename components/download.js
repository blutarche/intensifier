import React from 'react';

export default class Download extends React.Component {
  constructor() {
  	super();
  }

  onClick(e) {
    e.preventDefault();
    this.props.downloadGIF();
  }

  render() {
    return (
      <div className={this.props.shouldShow ? "form-group" : "hidden"}>
        <div className="col-sm-5 col-sm-offset-4">
          <button className="btn btn-hg btn-success btn-embossed upload" onClick={this.onClick.bind(this)} style={{"width" : "100%"}}>
              <b><i className="fa fa-download" aria-hidden="true"></i> Download</b>
          </button>
        </div>
      </div>
    );
  }
};