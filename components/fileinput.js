import React from 'react';

export default class FileInput extends React.Component {
  render() {
    return (
      <div className="text-center">
  		  <button className="btn btn-hg btn-embossed btn-primary upload">
  			<i className="fa fa-picture-o" aria-hidden="true"></i> Upload your own photo
  			<input type="file" name="picture" accept="image/*" />
  		  </button>
      </div>
    );
  }
};
