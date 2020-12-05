import { MenuItem,  Select } from '@material-ui/core';
import React, { useState } from "react";
import getDiagnosis from "../utils/getDiagnosis";

function SelectDiagnosis(props) {

  const [diagnosisState, setDiagnosisState] = useState("");

  const handleDiagnosisChange = (event)=> {
    event.preventDefault();
    console.log(event)
    setDiagnosisState(event.target.value);
}

  const diagnosisList = getDiagnosis();

  return ( 
    <div>
        <label>Select A Diagnosis</label>
        <Select onChange={handleDiagnosisChange} value={diagnosisState}>
          {diagnosisList.map((item, i) =>
            <MenuItem key={i} value={item}>{item}</MenuItem>)}
        </Select>
    </div>
  );
}

export default SelectDiagnosis;