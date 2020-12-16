import React, { useContext, useState } from "react";
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';


function RequestType() {

  let history = useHistory();

  const { state, setState } = useContext(FormObject);

  const handleClick = (event)=> {
    setState({...state, 
      newRequest: event.newRequest,
      expeditedReview: event.expeditedReview,
      oralRequest: event.oralRequest,
      resubmission: event.resubmission});
      console.log(state);
      history.push("/new-employee-information");
  }

  return (
    <div className="col-4">
      <h3 className="text-center mt-2">Start A New Form</h3>
      
      <div className="row">
      <button className="btn btn-secondary m-1" onClick={(e)=> { handleClick({newRequest: true, expeditedReview: false, oralRequest: false, resubmission: false})}} variant="contained" >New Request</button>
      </div>
      
      <div className="row">
      <button className="btn btn-secondary m-1" onClick={(e)=> { handleClick({newRequest: false, expeditedReview: true, oralRequest: false, resubmission: false})}} variant="contained">Expedited Review</button>
      </div>

      <div className="row"> 
        <button className="btn btn-secondary m-1" onClick={(e)=> { handleClick({newRequest: false, expeditedReview: false, oralRequest: true, resubmission: false})}} variant="contained">Written Confirmation of Oral Request</button>
      </div>

      <div className="row">
        <button className="btn btn-secondary m-1" onClick={(e)=> { handleClick({newRequest: false, expeditedReview: false, oralRequest: false, resubmission: true})}} variant="contained">Resubmission</button>
        </div>
    </div>
  )}

export default RequestType;