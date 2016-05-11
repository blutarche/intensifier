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
          Aikdanai Sidhikosol<br/>
          Supanut Apikulvanich
        </p>
      </div>
    );
  }
};