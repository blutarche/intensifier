import React from 'react';
import Header from './header';
import Drawing from './drawing';
import FileInput from './fileinput';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {url: 'https://graph.facebook.com/1021235868/picture?width=500'};
  }

  updatePicture(url) {
    this.setState({url: url});
  }

  render() {
    return (
        <div className="col-xs-12">
          <Header />
          <Drawing url={this.state.url} />
          <FileInput updatePicture={this.updatePicture.bind(this)} />
        </div>
    );
  }
}