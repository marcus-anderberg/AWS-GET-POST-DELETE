import React, { Component } from "react";
import axios from "axios";

class FileDisplay extends Component {

  render() {

    const file = this.props.myFile;

    return (
      <ul>
        <li>key: {file.key}</li>
        <li>size: {file.size}</li>
        <li>storageClass: {file.storageClass}</li>
      </ul>
    );
  }
}

export default FileDisplay;
