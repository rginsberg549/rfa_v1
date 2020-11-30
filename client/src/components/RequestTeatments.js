import React, { useState } from "react";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TreatmentRow from "../components/TreatmentRow";


function RequestTreatments() {
  let history = useHistory();

  const [treatmentRowState, setTreatmentRow] = useState([
    { diagnosis: "Diagnosis 1", treatment: "", notes: "Note 1" },
    { diagnosis: "Diagnosis 2", treatment: "", notes: "Note 2" },
    { diagnosis: "Diagnosis 3", treatment: "", notes: "Note 3" },
  ]);

  const handleNextClick = (event)=> {
    event.preventDefault();
    history.push("/")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  const renderTreatmentRow = () => {
    const newTreatmentRow = [...treatmentRowState, 
      {
        id: "",
        diagnosis: "",
        treatment: "",
        notes: "",
      }]
    setTreatmentRow(newTreatmentRow);
  }


  return (
    <div>
      {treatmentRowState.map(() => <TreatmentRow treatmentRowState={treatmentRowState}></TreatmentRow>)}
      <Button onClick={renderTreatmentRow.bind(this)}>Add Another Treatment</Button>
      <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
      <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </div> 
  )}

export default RequestTreatments;