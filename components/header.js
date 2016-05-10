import React from 'react';

export default class Header extends React.Component {
  constructor() {
  	super();
  }

  render() {
    return (
      <div className="header text-center">
        <h3>Intensifier</h3>
        <h6>The most intense gif maker</h6>
      </div>
    );
  }
};