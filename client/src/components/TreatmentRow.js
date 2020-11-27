import { MenuItem,  Select, TextareaAutosize } from '@material-ui/core';
import React, { useContext, useState } from "react";
import FormObject from "../utils/FormContext";
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";

function TreatmentRow() {


  const [treatmentsState, setTreatments] = useState([]);
  const [selectedDiagnosisState, setSelectedDiagnosis] = useState("");
  const [selectedTreatmentsState, setSelectedTreatment] = useState("");
  const [treatmentNotesState, setTreatmentNotes] = useState("");

  const { updateContextField, updateTreatmentPlan } = useContext(FormObject);

  const handleDiagnosisChange = (event)=> {
      event.preventDefault();
      setSelectedDiagnosis(event.target.value);
      const treatments = getTreatments(event.target.value);
      setTreatments(treatments);
  }

  const handleTreatmentChange = (event)=> {
    event.preventDefault();
    setSelectedTreatment(event.target.value);
  }

  const handleNotesChange = (event)=> {
    event.preventDefault();
    setTreatmentNotes(event.target.value);
  }

  const diagnosis = getDiagnosis();

  return ( 
    <form>
        <label>Select A Diagnosis</label>
        <Select labelId="" id="" value={selectedDiagnosisState} onChange={handleDiagnosisChange} >
          {diagnosis.map((item, i) =>
            <MenuItem key={i} value={item}>{item}</MenuItem>)}
        </Select>

        <label>Choose a Treatment</label>
        <Select labelId="" id="" value={selectedTreatmentsState} onChange={handleTreatmentChange} >
          {treatmentsState.map(item=>
            <MenuItem value={item}>{item}</MenuItem>)}
        </Select>

        <TextareaAutosize onChange={handleNotesChange}/>
    </form>
  );
}

export default TreatmentRow;