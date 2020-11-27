import React, { useContext, useState } from "react";
import { MenuItem, Label, Select, Button, Input, TextareaAutosize } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";


function RequestTreatments() {

  let history = useHistory();

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

  const handleNextClick = (event)=> {
    event.preventDefault();
    history.push("/")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  const diagnosis = getDiagnosis();
  
  return (
    <form>
        <label>Select A Diagnosis</label>
        <Select labelId="" id="" value={selectedDiagnosisState} onChange={handleDiagnosisChange} >
          {diagnosis.map(item=>
            <MenuItem value={item}>{item}</MenuItem>)}
        </Select>

        <label>Choose a Treatment</label>
        <Select labelId="" id="" value={selectedTreatmentsState} onChange={handleTreatmentChange} >
          {treatmentsState.map(item=>
            <MenuItem value={item}>{item}</MenuItem>)}
        </Select>

        <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."
    />


        <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
        <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </form>
  )}

export default RequestTreatments;