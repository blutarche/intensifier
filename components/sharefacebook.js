import React from 'react';

export default class ShareFacebook extends React.Component {
  constructor() {
  	super();
  }

  render() {
    return (
      <div className="fb-share-button" data-href="http://dev.aikdanai.com/intensifier/" data-layout="button_count" data-mobile-iframe="false"></div>
    );
  }
};