import { Button, MenuItem,  Select, TextareaAutosize } from '@material-ui/core';
import React, { useContext, useState } from "react";
import FormObject from "../utils/FormContext";
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";

function TreatmentRow() {


  const [treatmentsState, setTreatments] = useState([]);

  const [selectedDiagnosisState, setSelectedDiagnosis] = useState("");
  const [selectedTreatmentsState, setSelectedTreatment] = useState("");
  const [treatmentNotesState, setTreatmentNotes] = useState("");



  const { updateRequestedTreatments } = useContext(FormObject);

  const handleDiagnosisChange = (event)=> {
      event.preventDefault();
      setSelectedDiagnosis(event.target.value);
      const treatments = getTreatments(event.target.value);
      setTreatments(treatments);
      updateRequestedTreatments(selectedDiagnosisState);
      console.log(FormObject);
  }

  const handleTreatmentChange = (event)=> {
    event.preventDefault();
    setSelectedTreatment(event.target.value);
  }

  const handleNotesChange = (event)=> {
    event.preventDefault();
    setTreatmentNotes(event.target.value);
  }

  const handleDeleteTreatmentRow = (event)=> {
    event.preventDefault();
    
  }

  const diagnosis = getDiagnosis();

  return ( 
    <form>
        <label>Select A Diagnosis</label>
        <Select value={selectedDiagnosisState} onChange={handleDiagnosisChange} >
          {diagnosis.map((item, i) =>
            <MenuItem key={i} value={item}>{item}</MenuItem>)}
        </Select>

        <label>Choose a Treatment</label>
        <Select value={selectedTreatmentsState} onChange={handleTreatmentChange} >
          {treatmentsState.map((item,i)=>
            <MenuItem key={i} value={item}>{item}</MenuItem>)}
        </Select>

        <TextareaAutosize onChange={handleNotesChange}/>

        <Button onChange={handleDeleteTreatmentRow}>Remove</Button>

    </form>
  );
}

export default TreatmentRow;