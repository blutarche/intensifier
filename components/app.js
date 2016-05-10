import React from 'react';
import Header from './header';
import Drawing from './drawing';
import FileInput from './fileinput';
import Download from './download';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      url: 'https://graph.facebook.com/1021235868/picture?width=500',
      imageUploaded: false
    };
  }

  updatePicture(url) {
    this.setState({url: url, imageUploaded: true});
  }

  render() {
    return (
        <div className="col-xs-12">
          <Header />
          <Drawing url={this.state.url} />
          <FileInput updatePicture={this.updatePicture.bind(this)} />
          <Download shouldShow={this.state.imageUploaded}/>
        </div>
    );
  }
}