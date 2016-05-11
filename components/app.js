import React from 'react';
import Header from './header';
import Drawing from './drawing';
import FileInput from './fileinput';
import TextInput from './textinput';
import Download from './download';
import Footer from './footer'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      url: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg',
      imageUploaded: false
    };
  }

  updatePicture(url) {
    this.setState({url: url, imageUploaded: true});
  }

  render() {
    return (
      <div className="col-xs-12">
        <Header/>
        <Drawing url={this.state.url} />
        <form className="form-horizontal">
          <FileInput updatePicture={this.updatePicture.bind(this)} />
          <TextInput shouldShow={this.state.imageUploaded}/>
          <Download shouldShow={this.state.imageUploaded}/>
        </form>
        <Footer />
      </div>
    );
  }
}