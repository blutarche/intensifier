import React from 'react';
import Header from './header';
import Drawing from './drawing';
import FileInput from './fileinput';

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