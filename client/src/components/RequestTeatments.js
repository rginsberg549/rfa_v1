import React, { useContext, useState } from "react";
import { Button, MenuItem } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';
import TreatmentRow from "../components/TreatmentRow";


function RequestTreatments() {

  let history = useHistory();

  const [treatmentRowState, setTreatmentRow] = useState({components: [<TreatmentRow></TreatmentRow>]})

  const { updateRequestedTreatments } = useContext(FormObject);


  const handleNextClick = (event)=> {
    event.preventDefault();
    history.push("/")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  const renderTreatmentRow = (event) => {
    console.log(event)


    const newComponents = [...treatmentRowState.components, <TreatmentRow/>];
    setTreatmentRow({
      components: newComponents
    });
  }


  
  return (
    <div>
      {treatmentRowState.components.map(()=>
            <TreatmentRow></TreatmentRow>)}
      <Button onClick={renderTreatmentRow.bind(this)}>Add Another Treatment</Button>
      <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
      <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </div> 
  )}

export default RequestTreatments;