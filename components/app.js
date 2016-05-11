import React from 'react';
import Header from './header';
import Drawing from './drawing';
import FileInput from './fileinput';
import TextInput from './textinput';
import Download from './download';
import Footer from './footer'

var downloadURL = "";

export default class App extends React.Component {
  constructor() {
    super();
    this.text = '';
    this.state = {
      url: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg',
      imageUploaded: false,
      downloadURL: ''
    };
    downloadURL = this.state.downloadURL;
  }

  updatePicture(url) {
    this.setState({url: url, imageUploaded: true, downloadURL: ''});
  }

  downloadURI(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
  }

  downloadGIF() {
    this.downloadURI(downloadURL, "intensifier.gif");
  }

  gifComplete(url) {
    downloadURL = url;
  }

  textInputChange(value) {
    this.text = value;
    console.log(this.text);
  }

  render() {
    return (
      <div className="col-xs-12">
        <Header/>
        <Drawing url={this.state.url} gifComplete={this.gifComplete.bind(this)} />
        <form className="form-horizontal">
          <FileInput updatePicture={this.updatePicture.bind(this)} />
          <TextInput textChange={this.textInputChange.bind(this)} shouldShow={this.state.imageUploaded}/>
          <Download shouldShow={this.state.imageUploaded} downloadGIF={this.downloadGIF.bind(this)} />
        </form>
        <Footer />
      </div>
    );
  }
}