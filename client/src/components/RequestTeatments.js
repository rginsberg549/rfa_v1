import React, { useContext, useState } from "react";
import { Button, MenuItem } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';
import TreatmentRow from "../components/TreatmentRow";
import selectedDiagnosisState from "../components/TreatmentRow";


function RequestTreatments() {

  let history = useHistory();

  const [treatmentRowState, setTreatmentRow] = useState({components: []})

  const { updateRequestedTreatments } = useContext(FormObject);


  const handleNextClick = (event)=> {
    event.preventDefault();
    history.push("/")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  const renderTreatmentRow = () => {
    const newTreatmentRow = [...treatmentRowState.components, <TreatmentRow/>];
    setTreatmentRow({
      components: newTreatmentRow
    });
  }


  
  return (
    <div>
      {treatmentRowState.components.map((i) => <TreatmentRow key={i} ></TreatmentRow>)}
      <Button onClick={renderTreatmentRow.bind(this)}>Add Another Treatment</Button>
      <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
      <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </div> 
  )}

export default RequestTreatments;