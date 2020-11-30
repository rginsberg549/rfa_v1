import { Button, MenuItem,  Select, TextareaAutosize } from '@material-ui/core';
import React, { useContext, useState } from "react";
import FormObject from "../utils/FormContext";
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";

function TreatmentRow(treatmentRowState) {
  console.log(treatmentRowState);

  const [treatmentsState, setTreatments] = useState([]);

  const handleDiagnosisChange = (event)=> {
      event.preventDefault();
      const treatments = getTreatments(event.target.value);
      setTreatments(treatments);
  }

  const handleTreatmentChange = (event)=> {
    event.preventDefault();
  }

  const handleNotesChange = (event)=> {
    event.preventDefault();
  }

  const handleDeleteTreatmentRow = (event)=> {
    event.preventDefault();

  }

  const diagnosisList = getDiagnosis();

  return ( 
    <form>
        <label>Select A Diagnosis</label>
        <Select value={treatmentRowState.diagnosis} onChange={handleDiagnosisChange} >
          {diagnosisList.map((item, i) =>
            <MenuItem key={i} value={item}>{item}</MenuItem>)}
        </Select>

        <label>Choose a Treatment</label>
        <Select onChange={handleTreatmentChange} >
          {treatmentsState.map((item,i)=>
            <MenuItem key={i} value={item}>{item}</MenuItem>)}
        </Select>

        <TextareaAutosize onChange={handleNotesChange}/>

        <Button onChange={handleDeleteTreatmentRow}>Remove</Button>

    </form>
  );
}

export default TreatmentRow;