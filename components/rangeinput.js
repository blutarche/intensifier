import React from 'react';


export default class RangeInput extends React.Component {
  constructor() {
    super();
    // this.fileChange = this.fileChange.bind(this);
  }

  // fileChange(e) {
  //   // var reader = new FileReader();
  //   // var file = e.target.files[0];
  //   // var url = URL.createObjectURL(file);
  //   // console.log("fileChange URL: "+url);
  //   // this.props.updatePicture(url);
  //   // window.file = file;
  // }

  render() {
    return (
      <div className={this.props.shouldShow ? "form-group" : "hidden"}>
        <div className="col-sm-5 col-sm-offset-4">
          <input className={this.props.shouldShow ? "form-group" : "hidden"} type="range" min="0" max="15" onChange={this.props.rangeChange.bind(this)} />
        </div>
      </div>
    )
  }
};
