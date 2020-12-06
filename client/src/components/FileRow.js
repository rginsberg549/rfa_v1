import React, { useState } from "react";
import { MenuItem, Select, TextareaAutosize, Button } from "@material-ui/core";

function FileRow(props) {
  const [fileRowState, setFileRowState] = useState({ id: props.rowKey });

  const [fileState, setFileState] = useState("");

  const handleFileUpload = (event) => {
    event.preventDefault();
    console.log(event);
    setFileState(event.target.value);
    console.log("FileState", fileState);
  };

  return (
    <div>
      <Button variant="contained" component="label">
        Upload File
        <input onChange={handleFileUpload} type="file" />
      </Button>
      <Button onClick={() => props.deleteFileRow(props.rowKey)}>Delete</Button>
    </div>
  );
}

export default FileRow;
