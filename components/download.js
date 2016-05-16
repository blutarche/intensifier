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
          <p className="tip">If you wanna share your picture on facebook, since they don't allowed uploading your own .gif picture, I recommend upload&share a link from this awesome site: <a href="http://giphy.com/upload" target="_blank">Giphy</a></p>
        </div>
      </div>
    );
  }
};