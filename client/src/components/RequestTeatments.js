import React, { useState, useContext } from "react";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TreatmentRow from "../components/TreatmentRow";
import FormContext from "../utils/FormContext";


function RequestTreatments() {
  let history = useHistory();

  const [treatmentRowState, setAllTreatmentRows] = useState([{}]);

  const { requestedTreatments, updateRequestedTreatments } = useContext(FormContext);

  function updateTreatmentRow(treatment) {
    setAllTreatmentRows([...treatmentRowState, treatment]);
  }

  const handleNextClick = (event)=> {
    event.preventDefault();
    console.log(treatmentRowState);
    updateRequestedTreatments(treatmentRowState);
    console.log(FormContext);

    history.push("/");
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  
  const renderTreatmentRow = () => {
    const newTreatmentRow = [...treatmentRowState, 
      {
        diagnosis: "",
        treatment: "",
        notes: "",
      }]
    setAllTreatmentRows(newTreatmentRow);
  }


  return (
    <div>
      {treatmentRowState.map((item,i) => <TreatmentRow key={i} row={item} index={i} updateTreatmentRow={updateTreatmentRow}> </TreatmentRow>)}
      <Button onClick={renderTreatmentRow}>Add Another Treatment</Button>
      <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
      <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </div> 
  )
}

export default RequestTreatments;