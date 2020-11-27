import React, { useContext, useState } from "react";
import { Button, MenuItem } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";
import TreatmentRow from "../components/TreatmentRow";


function RequestTreatments() {

  let history = useHistory();

  const [treatmentsState, setTreatments] = useState([]);
  const [treatmentRowState, setTreatmentRow] = useState({components: [<TreatmentRow></TreatmentRow>]})

  const { updateTreatmentPlan } = useContext(FormObject);


  const handleNextClick = (event)=> {
    event.preventDefault();
    updateTreatmentPlan(...treatmentsState, treatmentsState)
    console.log(FormObject);
    history.push("/")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  const diagnosis = getDiagnosis();

  const renderTreatmentRow = () => {
    console.log("I was clicked");
    const newComponents = [...treatmentRowState.components, <TreatmentRow/>];
    setTreatmentRow({
      components: newComponents
    });
  }


  
  return (
    <div>
      {treatmentRowState.components.map(item=>
            <TreatmentRow></TreatmentRow>)}
      <Button onClick={renderTreatmentRow.bind(this)}>Add Another Treatment</Button>
      <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
      <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </div> 
  )}

export default RequestTreatments;