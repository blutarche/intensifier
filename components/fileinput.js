import React from 'react';

export default class FileInput extends React.Component {
  render() {
    return (
      <div>
        <input type="file" name="picture" accept="image/*" />
      </div>
    );
  }
};
