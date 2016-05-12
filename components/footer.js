import React from 'react';

export default class Footer extends React.Component {
  constructor() {
  	super();
  }

  render() {
    return (
      <div className="text-center footer row">
        <p className="splitter">___________</p>
        <b>Contributors</b><br/>
        <div className="row text-center">
          <div className="col-sm-6 text-right">
            Aikdanai Sidhikosol<br />
            Supanut Apikulvanich<br />
            Aphichan Chaiyutthasart<br />
          </div>
          <div className="col-sm-6 text-left">
            <a href="https://github.com/blutarche"><i className="fa fa-github"></i></a>
            <br />
            <a href="https://github.com/SzNeUrTo"><i className="fa fa-github"></i></a>
            <br />
            <a href="https://github.com/ak1103dev"><i className="fa fa-github"></i></a>
            <br />
          </div>
        </div> 
      </div>
    );
  }
};