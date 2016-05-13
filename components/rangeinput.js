import React from 'react';


export default class RangeInput extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.labelText);
    return (
      <div className={this.props.shouldShow ? "form-group" : "hidden"}>
        <label className="col-sm-4 control-label"> 
          <b>{this.props.labelText}</b>
        </label>
        <div className="text-center col-sm-5">
          <input className="form-control" type="range" min="1" max="5" step="0.2" onChange={this.props.rangeChange.bind(this)} style={{"marginTop": "13px"}} />
        </div>
      </div>
    )
  }
};
