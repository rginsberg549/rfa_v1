import React, { useContext, useState } from "react";
import { Button, Input } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function EmployeeInformation() {

  let history = useHistory();

  const { updateContextField, 
    employee_firstName, 
    employee_middleName, 
    employee_lastName, 
    employee_dateOfInjury, 
    employee_dateOfBirth, 
    employee_claimNumber,
    employee_employer } = useContext(FormObject);

  const handleInput = (event)=> {
    console.log("Event", event);
      event.preventDefault();
      updateContextField(event);
      console.log(FormObject)
  }

  const handleNextClick = (event)=> {
    event.preventDefault();
    //axios.post("/api/employee", employeeState)
    history.push("/physician-information")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  return (
    <form>
        <label>First Name<input value={employee_firstName} onChange={(e)=> handleInput(e)} type="text" name="employee_firstName" /></label>
        <label>Middle Name<input onChange={handleInput} type="text" name="employee_middleName" /></label>
        <label>Last Name<input onChange={handleInput} type="text" name="employee_lastName" /></label>
        <label>Date of Injury Name<input onChange={handleInput} type="date" name="employee_dateOfInjury" /></label>
        <label>Date of Birth<input onChange={handleInput} type="date" name="employee_dateOfBirth" /></label>
        <label>Claim Number<input onChange={handleInput} type="number" name="employee_claimNumber" /></label>
        <label>Employer<input onChange={handleInput} type="text" name="employee_employer" /></label>
        <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
        <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </form>
  )}

export default EmployeeInformation;