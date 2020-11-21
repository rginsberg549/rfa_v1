import React, { useContext } from "react";
import { Button, Input } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';


function PhysicianInformation() {

  let history = useHistory();

  const { updateContextField } = useContext(FormObject);

  const handleInput = (event)=> {
      event.preventDefault();
      updateContextField(event);
  }

  const handleNextClick = (event)=> {
    event.preventDefault();
    history.push("/claims-administrator-information")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }
  
  return (
    <form>
        <label>Physician Name<input onChange={handleInput} type="text" name="physician_physicianName" /></label>
        <label>Practice Name<input onChange={handleInput} type="text" name="physician_practiceName" /></label>
        <label>Contact Name<input onChange={handleInput} type="text" name="physician_contactName" /></label>
        <label>Address<input onChange={handleInput} type="text" name="physician_address" /></label>
        <label>City<input onChange={handleInput} type="text" name="physician_city" /></label>
        <label>State<input onChange={handleInput} type="text" name="physician_state" /></label>
        <label>Zip Code<input onChange={handleInput} type="number" name="physician_zipcode" /></label>
        <label>Phone Number<input onChange={handleInput} type="number" name="physician_phoneNumber" /></label>
        <label>Fax Number<input onChange={handleInput} type="number" name="physician_faxNumber" /></label>
        <label>Specialty<input onChange={handleInput} type="text" name="physician_specialty" /></label>
        <label>NPI Number<input onChange={handleInput} type="number" name="physician_npiNumber" /></label>
        <label>E-Mail Address<input onChange={handleInput} type="email" name="physician_email" /></label>
        <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
        <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </form>
  )}

export default PhysicianInformation;