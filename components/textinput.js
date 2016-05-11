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
    return (null);

    // (
    //   <div className={this.props.shouldShow ? "form-group" : "hidden"}>
    //     <label className="col-sm-4 control-label"> 
    //       <b>Message</b>
    //     </label>
    //     <div className="text-center col-sm-5">
    //       <input type="text" placeholder="[doge intensifies]" className="form-control input-hg" style={{"width": "100%"}} onChange={this.textChange}/>
    //     </div>
    //   </div>
    // );
  }
};
