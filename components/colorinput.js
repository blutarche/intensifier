import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from 'react-colors-picker';

export default class ColorInput extends React.Component {
  constructor() {
    super();
  }

  textColorChange(obj) {
    this.props.textColorChange(obj);
  }

  strokeColorChange(obj) {
    this.props.strokeColorChange(obj);
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-6 col-md-4 control-label"> 
          <b>Text color</b>
        </label>
        <div className="col-sm-6 col-md-2" style={{"paddingTop": "13px"}}>
           <ColorPicker
            animation="slide-up"
            color={this.props.textColor}
            onChange={this.textColorChange.bind(this)}
          />
        </div>
        <label className="col-sm-6 col-md-4 control-label"> 
          <b>Stroke color</b>
        </label>
        <div className="col-sm-6 col-md-2" style={{"paddingTop": "13px"}}>
           <ColorPicker
            animation="slide-up"
            color={this.props.strokeColor}
            onChange={this.strokeColorChange.bind(this)}
          />
        </div>
      </div>
    )
  }
};
