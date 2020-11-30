import { TextareaAutosize } from '@material-ui/core';
import React, { useState } from "react";
import getDiagnosis from "../utils/getDiagnosis";

function Notes(props) {
  return ( 
    <div>
        <label>Add Additional Notes</label>
        <TextareaAutosize defaultValue={props.notes}/>
    </div>
  );
}

export default Notes;