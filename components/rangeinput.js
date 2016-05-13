import React from 'react';


export default class RangeInput extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.labelText);
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label"> 
          <b>{this.props.labelText}</b>
        </label>
        <div className="text-center col-sm-8">
          <input className="form-control" type="range" min="1" max="5" step="0.2" onChange={this.props.rangeChange.bind(this)}/>
        </div>
      </div>
    )
  }
};
