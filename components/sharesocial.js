import React from 'react';

export default class ShareSocial extends React.Component {
  constructor() {
  	super();
  }

  render() {
    return (
    	<div className="text-center">
      		<div className="fb-share-button" data-href="http://aikdanai.com/intensifier/" data-layout="button_count" data-mobile-iframe="false"></div>
      		<div style={{marginLeft: "20px", display: "inline", top: "8px", position: "relative"}}>
	      		<a href="https://twitter.com/share" className="twitter-share-button" data-via="aikdanai" data-hashtags="intensifies" >
	      			Tweet
	      		</a>
      		</div>
    	</div>

    );
  }
};