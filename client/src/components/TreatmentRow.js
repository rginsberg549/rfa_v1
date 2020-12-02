import React, { useState } from "react";
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";
import SelectTreatment from "../components/SelectTreatment";
import Notes from "../components/Notes";
import DeleteTreatmentRow from "./DeleteTreatmentRow";
import { MenuItem, Select, TextareaAutosize  } from "@material-ui/core";

function TreatmentRow(props) {
  const [treatmentRowState, setTreatmentRowState] = useState({});

  const [diagnosisState, setDiagnosisState] = useState("");
  const [treatmentState, setTreatmentState] = useState("");
  const [noteState, setNoteState] = useState("");

  const handleDiagnosisChange = (event) => {
    event.preventDefault();
    setDiagnosisState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ diagnosis: event.target.value }});
    props.updateTreatmentRow(treatmentRowState);
  };

  const handleTreatmentChange = (event) => {
    event.preventDefault();
    setTreatmentState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ treatment: event.target.value }});
    props.updateTreatmentRow(treatmentRowState);
  };

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNoteState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ note: event.target.value }});
    props.updateTreatmentRow(treatmentRowState);
  };

  const diagnosisList = getDiagnosis();
  const treatmentList = getTreatments(diagnosisState);

  return (
    <form>
      <div>
        <label>Select A Diagnosis</label>
        <Select onChange={handleDiagnosisChange} value={diagnosisState}>
          {diagnosisList.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <label>Select A Treatment</label>
        <Select onChange={handleTreatmentChange} value={treatmentState}>
          {treatmentList.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <label>Add Additional Notes</label>
        <TextareaAutosize/>
    </div>
    
    <DeleteTreatmentRow></DeleteTreatmentRow>
    </form>
  );
}

export default TreatmentRow;
