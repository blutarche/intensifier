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
          <input className={this.props.shouldShow ? "form-group" : "hidden"} type="range" min="0" max="15" onChange={this.props.rangeChange.bind(this)} style={{"marginLeft": "0", "marginRight": "0"}} />
        </div>
      </div>
    )
  }
};
