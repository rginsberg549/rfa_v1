import { MenuItem,  Select } from '@material-ui/core';
import React, { useState } from "react";
import getTreatments from "../utils/getTreatments";

function SelectTreatment(props) {

  const [treatmentState, setTreatmentState] = useState([]);

  const treatmentList = getTreatments(props.diagnosis);

  const handleDiagnosisChange = (event)=> {
      event.preventDefault();
      setTreatmentState(event.target.value);
  }

  return ( 
    <div>
        <label>Select A Treatment</label>
        <Select defaultValue="" value={props.treatment} onChange={handleDiagnosisChange} >
          {treatmentList.map((item, i) =>
            <MenuItem key={i} value={item}>{item}</MenuItem>)}
        </Select>
    </div>
  );
}

export default SelectTreatment;