import React, { Component } from "react";
import axios from "axios";

class FileList extends Component {

  componentDidMount() {
    this.getFiles();
  }

  getFiles = () => {
    console.log('hi im gettinr files ok');
    axios.get('aws')
    .then(response => {
      console.log(response);
    })

    .catch(error => {
      console.log('error with getting files', error);
    })
  }

  render() {
    return (
      <div>
      
      </div>
    );
  }
}

export default FileList;
