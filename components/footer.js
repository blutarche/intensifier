import React from 'react';

export default class Footer extends React.Component {
  constructor() {
  	super();
  }

  render() {
    return (
      <div className="text-center footer">
        <p className="splitter">___________</p>
        <p>
          <b>Contributors</b><br/>
          Aikdanai Sidhikosol&nbsp;
          <a href="https://github.com/blutarche"><i className="fa fa-github"></i></a>
          <br/>
          Supanut Apikulvanich&nbsp;
          <a href="https://github.com/SzNeUrTo"><i className="fa fa-github"></i></a>
        </p>
      </div>
    );
  }
};