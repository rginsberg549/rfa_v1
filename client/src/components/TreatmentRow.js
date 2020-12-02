
import React, { useContext, useState } from "react";
import FormObject from "../utils/FormContext";
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";
import SelectDiagnosis from "../components/SelectDiagnosis";
import SelectTreatment from "../components/SelectTreatment";
import Notes from "../components/Notes";
import DeleteTreatmentRow from "./DeleteTreatmentRow";
import RequestTreatments from "../components/RequestTeatments";
import { MenuItem,  Select } from '@material-ui/core';

function TreatmentRow(props) {

  const [diagnosisState, setDiagnosisState] = useState("");
  const [treatmentRowState, setTreatmentRowState] = useState({});

  const handleDiagnosisChange = (event)=> {
    event.preventDefault();
    setDiagnosisState(event.target.value);
    handleTreatmentRowChange({diagnosis: event.target.value});
}

  const handleTreatmentRowChange = (newValue)=> {
    setTreatmentRowState({
      ...treatmentRowState, ...newValue
    })
    props.updateTreatmentRow(treatmentRowState);
  }

  const diagnosisList = getDiagnosis();
  return ( 
    <form>
        <div>
          <label>Select A Diagnosis</label>
          <Select onChange={handleDiagnosisChange} value={diagnosisState}>
            {diagnosisList.map((item, i) =>
            <MenuItem key={i} value={item}>{item}</MenuItem>)}
            </Select>
    </div>
        <SelectTreatment diagnosis={props.row.diagnosis} treatment={props.row.treatment}></SelectTreatment>
        <Notes notes={props.row.notes}></Notes>
        <DeleteTreatmentRow></DeleteTreatmentRow>
    </form>
  );
}

export default TreatmentRow;