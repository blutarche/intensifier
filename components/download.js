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
      <div className="form-group" style={{"marginTop": "3em"}} >
        <div className="col-sm-12 text-center">
          <button className="btn btn-super-hg btn-success btn-embossed" onClick={this.onClick.bind(this)}>
              <b><i className="fa fa-download" aria-hidden="true"></i> Download</b>
          </button>
        </div>
      </div>
    );
  }
};