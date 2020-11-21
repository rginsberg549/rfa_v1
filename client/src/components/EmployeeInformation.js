import React, { useContext } from "react";
import { Button, Input } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';


function EmployeeInformation() {

  let history = useHistory();

  const { updateContextField } = useContext(FormObject);

  const handleInput = (event)=> {
      event.preventDefault();
      updateContextField(event);
  }

  const handleNextClick = (event)=> {
    event.preventDefault();
    history.push("/physician-information")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  return (
    <form>
        <label>First Name<input onChange={handleInput} type="text" name="employee_firstName" /></label>
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