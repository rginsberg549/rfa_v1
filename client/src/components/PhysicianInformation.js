import React, { useContext, useState } from "react";
import { Button, Input } from '@material-ui/core';
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function PhysicianInformation() {

  let history = useHistory();

  const { updateContextField } = useContext(FormObject);
  const [ physicianState , setPhysicianState ]= useState(
    {
      name: "",
      practiceName: "",
      contactName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      faxNumber: "",
      emailAddress: "",
      specialty: "",
      npiNumber: ""
  });

  const handleInput = (event)=> {
      event.preventDefault();
      updateContextField(event);
      setPhysicianState({...physicianState, [event.target.name] : event.target.value})
  }

  const handleNextClick = (event)=> {
    event.preventDefault();
    axios.post("/api/physician", physicianState)
    history.push("/claims-administrator-information")
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }
  
  return (
    <form>
        <label>Physician Name<input value={physicianState.name} onChange={handleInput} type="text" name="name" /></label>
        <label>Practice Name<input onChange={handleInput} type="text" name="practiceName" /></label>
        <label>Contact Name<input onChange={handleInput} type="text" name="contactName" /></label>
        <label>Address<input onChange={handleInput} type="text" name="address" /></label>
        <label>City<input onChange={handleInput} type="text" name="city" /></label>
        <label>State<input onChange={handleInput} type="text" name="state" /></label>
        <label>Zip Code<input onChange={handleInput} type="number" name="zipcode" /></label>
        <label>Phone Number<input onChange={handleInput} type="number" name="phoneNumber" /></label>
        <label>Fax Number<input onChange={handleInput} type="number" name="faxNumber" /></label>
        <label>E-Mail Address<input onChange={handleInput} type="email" name="email" /></label>
        <label>Specialty<input onChange={handleInput} type="text" name="specialty" /></label>
        <label>NPI Number<input onChange={handleInput} type="number" name="npiNumber" /></label>
    
        <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
        <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </form>
  )}

export default PhysicianInformation;