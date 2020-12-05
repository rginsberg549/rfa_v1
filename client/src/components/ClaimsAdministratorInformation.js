import React, { useContext } from "react";
import { Button, Input } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';


function ClaimsAdministratorInformation() {

  let history = useHistory();

  const { updateContextField } = useContext(FormObject);

  const handleInput = (event)=> {
      event.preventDefault();
      updateContextField(event);
  }

  const handleNextClick = (event)=> {
    event.preventDefault();
    history.push("/request-treatments")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }
  
  return (
    <form>
        <label>Company Name<input onChange={handleInput} type="text" name="claims_companyName" /></label>
        <label>Contact Name<input onChange={handleInput} type="text" name="claims_contactName" /></label>
        <label>Address<input onChange={handleInput} type="text" name="claims_address" /></label>
        <label>City<input onChange={handleInput} type="text" name="claims_city" /></label>
        <label>State<input onChange={handleInput} type="text" name="claims_state" /></label>
        <label>Zip Code<input onChange={handleInput} type="number" name="claims_zipcode" /></label>
        <label>Phone Number<input onChange={handleInput} type="text" name="claims_phoneNumber" /></label>
        <label>Fax Number<input onChange={handleInput} type="text" name="claims_faxNumber" /></label>
        <label>E-Mail Address<input onChange={handleInput} type="text" name="claims_email" /></label>
        <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
        <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </form>
  )}

export default ClaimsAdministratorInformation;