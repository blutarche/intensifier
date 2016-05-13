import React from 'react';

export default class Header extends React.Component {
  constructor() {
  	super();
  }

  render() {
    return (
      <div className="header text-center row">
        <h3>Intensifier</h3>
        <h6>The most <b>intense</b> gif maker</h6>
      </div>
    );
  }
};