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

  return (
    <form>
        <label>First Name<input onChange={handleInput} type="text" name="firstName" /></label>
        <label>Middle Name<input onChange={handleInput} type="text" name="middleName" /></label>
        <label>Last Name<input onChange={handleInput} type="text" name="lastName" /></label>
        <label>Date of Injury Name<input onChange={handleInput} type="date" name="dateOfInjury" /></label>
        <label>Date of Birth<input onChange={handleInput} type="date" name="dateOfBirth" /></label>
        <label>Claim Number<input onChange={handleInput} type="number" name="claimNumber" /></label>
        <label>Employer<input onChange={handleInput} type="text" name="employer" /></label>
        <input type="submit" value="Submit" />
    </form>
  )}

export default EmployeeInformation;