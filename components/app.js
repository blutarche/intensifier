import React from 'react';
import Header from './header.js';
import Drawing from './drawing.js';
import FileInput from './fileinput.js';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="col-xs-12">
          <Header />
          <Drawing />
          <FileInput />
        </div>
    );
  }
}