import React from 'react';

export default class Footer extends React.Component {
  constructor() {
  	super();
  }

  render() {
    return (
      <div className="text-center footer row">
        <p className="splitter">___________</p>
        <p className="description">
        Intensifier .gif maker · Created by&nbsp;
        <a href="https://twitter.com/aikdanai" target="_blank">Aikdanai Sidhikosol</a> · <a href="https://github.com/SzNeUrTo" target="_blank">Supanut Apikulvanich</a> · <a href="https://github.com/ak1103dev" target="_blank">Apichan Chaiyutthasat</a><br/>
        <a href="https://github.com/blutarche/intensifier" target="_blank">GitHub Project</a> · <a href="https://github.com/blutarche/intensifier/issues" target="_blank">Issues</a>
        </p>
        
      </div>
    );
  }
};