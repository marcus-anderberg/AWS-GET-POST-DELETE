import React, { Component } from 'react';

import './App.css';
import Upload from './Upload'
import FileList from './FileList';


class App extends Component {
  render() {
    return (
      <div>
        <Upload />
        <FileList />
      </div>
    );
  }
}

export default App;
