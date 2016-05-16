import React from 'react';
import ShareFacebook from './sharefacebook';

export default class Footer extends React.Component {
  constructor() {
  	super();
    this.state = {
      pageviews: 0
    };
  }

  componentDidMount() {
    this.getPageViews();
  }

  getPageViews() {
    var views = document.getElementById("pageviews").innerHTML;
    views = views.replace(/[\r\n]/g, '');
    views = views.replace(/<script.*<\/script>/g, '');
    views = views.replace(/<noscript.*<\/noscript>/g, '');
    views = views.replace(/[ ]*/g, '');
    this.setState({pageviews: views});
    console.log("Page views: "+views);
  }

  render() {
    return (
      <div className="text-center footer row">
        <p className="splitter">___________</p>
        <p className="viewers">
          <b>{this.state.pageviews}</b> users visited us!<br />
          <a href="http://statcounter.com/" target="_blank"><img src="http://www.statcounter.com/images/button4.png" alt="Site Stats" width="80" height="15" border="0" /></a>
        </p>
        <p className="viewers">
          <ShareFacebook />
        </p>
        <p className="description">
        Intensifier .gif maker · Created by&nbsp;
        <a href="https://twitter.com/aikdanai" target="_blank">Aikdanai Sidhikosol</a> · <a href="https://github.com/SzNeUrTo" target="_blank">Supanut Apikulvanich</a> · <a href="https://github.com/ak1103dev" target="_blank">Apichan Chaiyutthasat</a><br/>
        <a href="https://github.com/blutarche/intensifier" target="_blank">GitHub Project</a> · <a href="https://github.com/blutarche/intensifier/issues" target="_blank">Issues</a>
        </p>
      </div>
    );
  }
};