import React, { useContext } from "react";
import { Button, Input } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';


function RequestType() {

  let history = useHistory();

  const { updateContextField } = useContext(FormObject);

  const handleClick = (event)=> {
    updateContextField(event);
    history.push("/new-employee-information");
  }

  return (
    <div>
    <Button name="requestType" onClick={(e)=> handleClick({target: {name: "requestType",value: "New Request"}})} variant="contained" value="NewRequest">New Request</Button>
    <Button name="requestType" onClick={(e)=> handleClick({target: {name: "requestType",value: "Expedited Review"}})}variant="contained">Expedited Review</Button>
    <Button name="requestType" onClick={(e)=> handleClick({target: {name: "requestType",value: "Written Confirmation of Oral Request"}})}variant="contained">Written Confirmation of Oral Request</Button>
    <Button name="requestType" onClick={(e)=> handleClick({target: {name: "requestType",value: "Resubmission"}})}variant="contained">Resubmission</Button>
    </div>
  )}

export default RequestType;