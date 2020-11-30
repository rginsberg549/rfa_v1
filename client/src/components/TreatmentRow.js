
import React, { useContext, useState } from "react";
import FormObject from "../utils/FormContext";
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";
import SelectDiagnosis from "../components/SelectDiagnosis";
import SelectTreatment from "../components/SelectTreatment";
import Notes from "../components/Notes";

function TreatmentRow(props) {

  const [treatmentsState, setTreatments] = useState([]);

  const handleTreatmentChange = (event)=> {
    event.preventDefault();
  }

  const handleNotesChange = (event)=> {
    event.preventDefault();
  }

  const handleDeleteTreatmentRow = (event)=> {
    event.preventDefault();

  }

  return ( 
    <form>
        <SelectDiagnosis diagnosis={props.row.diagnosis}></SelectDiagnosis>
        <SelectTreatment diagnosis={props.row.diagnosis} treatment={props.row.treatment}></SelectTreatment>
        <Notes notes={props.row.notes}></Notes>
    </form>
  );
}

export default TreatmentRow;