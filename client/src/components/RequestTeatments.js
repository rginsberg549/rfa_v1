import React, { useState, useContext } from "react";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TreatmentRow from "../components/TreatmentRow";
import FormContext from "../utils/FormContext";


function RequestTreatments() {
  let history = useHistory();

  const [treatmentRowState, setAllTreatmentRows] = useState([{id: 0}]);

  const { updateRequestedTreatments } = useContext(FormContext);

  function updateTreatmentRow(treatmentNew) {
    const arr = treatmentRowState.map(elem => {
      
      if (elem.id === treatmentNew.id) {
        return {
          ...elem,
          ...treatmentNew
        }
      } else {
        return elem
      }
    })
    setAllTreatmentRows(arr);
  }

  const handleNextClick = (event)=> {
    event.preventDefault();
    updateRequestedTreatments(treatmentRowState);
    history.push("/upload-supporting-documents");
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  
  const renderTreatmentRow = () => {
    const newTreatmentRow = [...treatmentRowState, 
      {
        id: treatmentRowState.length,
        diagnosis: "",
        treatment: "",
        note: "",
      }]
    setAllTreatmentRows(newTreatmentRow);
  }
  const deleteTreatmentRow = (id) => {
    const arr = treatmentRowState.filter(elem => elem.id !== id)
    setAllTreatmentRows(arr)
  }


  return (
    <div>
      {treatmentRowState.map((item,i) => <TreatmentRow 
      key={i}
      rowKey={i}
      row={item}
      index={i} 
      updateTreatmentRow={updateTreatmentRow}
      deleteTreatmentRow={deleteTreatmentRow}> </TreatmentRow>)}
      <Button onClick={renderTreatmentRow}>Add Another Treatment</Button>
      <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
      <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </div> 
  )
}

export default RequestTreatments;