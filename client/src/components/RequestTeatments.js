import React, { useState, useContext, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import TreatmentRow from "../components/TreatmentRow";
import FormContext from "../utils/FormContext";

function RequestTreatments() {
  let history = useHistory();

  const [treatmentRowState, setAllTreatmentRows] = useState([]);

  const { updateRequestedTreatments, state: {requestedTreatments} } = useContext(FormContext);

  useEffect(()=> {
    console.log("runnning use effect");
    console.log("requestedTreatments", requestedTreatments);
    if (requestedTreatments && requestedTreatments.length > 0) {
      setAllTreatmentRows(requestedTreatments);
    } else {
      setAllTreatmentRows([{ id: 0 }])
    }
  }, [requestedTreatments]);

  function updateTreatmentRow(treatmentNew) {
    const arr = treatmentRowState.map((elem) => {
      if (elem.id === treatmentNew.id) {
        return {
          ...elem,
          ...treatmentNew,
        };
      } else {
        return elem;
      }
    });
    console.log(arr);
    setAllTreatmentRows(arr);
  }

  const handleNextClick = (event) => {
    event.preventDefault();
    updateRequestedTreatments(treatmentRowState);
    history.push("/view-request");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  const renderTreatmentRow = () => {
    const newTreatmentRow = [
      ...treatmentRowState,
      {
        id: treatmentRowState.length,
        diagnosis: "",
        treatment: "",
        note: "",
      },
    ];
    setAllTreatmentRows(newTreatmentRow);
  };
  const deleteTreatmentRow = (id) => {
    const arr = treatmentRowState.filter((elem) => elem.id !== id);
    setAllTreatmentRows(arr);
  };

  return (

    <div className="container">
      <h6 className="text-center">State of California, Division of Workers' Compensation</h6>
      <h6 className="text-center">DWC Form RFA</h6>
      <h3 className="text-center">Requested Treatments</h3>

    <div>
      {treatmentRowState.map((item, i) => (
        <TreatmentRow
          key={i}
          rowKey={item.id}
          row={item}
          index={i}
          updateTreatmentRow={updateTreatmentRow}
          deleteTreatmentRow={deleteTreatmentRow}
        >
        </TreatmentRow>
      ))}

      <div className="row">
        <button class="btn btn-secondary back-button m-3" onClick={renderTreatmentRow}> + Add Treatment</button>
      </div>
      
      <div className="row">
        <div className="col text-center">
          <button onClick={handleBackClick} type="submit" value="back" class="btn btn-secondary back-button m-3"> Back </button>
          <button onClick={handleNextClick} type="submit" value="next" class="btn btn-secondary next-button m-3"> Next </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default RequestTreatments;
