import React from 'react';
import Header from './header.js';
import Drawing from './drawing';
import FileInput from './fileinput';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="col s12 center-align">
            <Header />
            <Drawing />
            <FileInput />
        </div>
    );
  }
}