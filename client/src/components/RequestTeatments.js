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
      <h2 className="text-center mt-3 mb-3">Requested Treatments</h2>

      <hr className="mb-4"></hr>
      <hr></hr>

    <div className="row">
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

      <div className="row d-flex justify-content-center">
        <button class="col-3 btn btn-primary mt-1 back-button" onClick={renderTreatmentRow}> + Add Treatment</button>
      </div>
      
      <div className="row mt-5 pt-5">
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
