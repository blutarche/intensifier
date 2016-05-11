import React from 'react';

export default class Footer extends React.Component {
  constructor() {
  	super();
  }

  render() {
    return (
      <div className="text-center footer">
        <p className="splitter">___________</p>
        <p><b>Contributors</b></p>
        <p>Aikdanai Sidhikosol</p>
        <p>Supanut Apikulvanich</p>
      </div>
    );
  }
};