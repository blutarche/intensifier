import React from 'react';

export default class TextInput extends React.Component {
  constructor() {
    super();
    this.textChange = this.textChange.bind(this);
  }

  textChange(e) {
    this.props.textChange(e.target.value);
  }

  render() {
    return (
      <div className="form-group">
        <label className="col-sm-4 control-label"> 
          <b>Message</b>
        </label>
        <div className="text-center col-sm-8">
          <input type="text" placeholder="[doge intensifies]" className="form-control input-hg" style={{"width": "100%"}} onChange={this.textChange}/>
        </div>
      </div>
    );
  }
};
