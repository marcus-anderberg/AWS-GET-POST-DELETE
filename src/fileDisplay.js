import React, { Component } from "react";
import axios from "axios";

class FileDisplay extends Component {


  deleteButton = () => {
    console.log('delete!');
     axios({
       method: "DELETE",
       url: "/test-upload"
     }).then(() => {
       this.getResults();
     });
  }

  render() {

    const file = this.props.myFile;
   

    return (
      <ul>
        <li>
          <a href={file.signedURL}>{file.key}</a>{" "}
          <button onclick="window.open('file.doc')">download</button>
        </li>
        {/* <li>size: {file.size}</li>
        <li>storageClass: {file.storageClass}</li>
        <li>URL: {file.signedURL}</li> */}
      </ul>
    );
  }
}

export default FileDisplay;
