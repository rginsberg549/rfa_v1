import React, { useContext, useState } from "react";
import { Button } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

function PhysicianInformation() {
  let history = useHistory();
  const {
    updateContextField,
    state: {
      physician_physicianName,
      physician_practiceName,
      physician_contactName,
      physician_address,
      physician_city,
      physician_state,
      physician_zipcode,
      physician_phoneNumber,
      physician_faxNumber,
      physician_specialty,
      physician_npiNumber,
      physician_email,
    },
  } = useContext(FormObject);

  const handleInput = (event) => {
    event.preventDefault();
    updateContextField(event);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    history.push("/claims-administrator-information");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (

    <div className="container">
      <h3 className="text-center mt-2">Physician Information</h3>
    
    <form>
      <div className="row">
        <div className="col">
          <span className="form-text">Physician Name</span>
          <input className="form-control" value={physician_physicianName} onChange={handleInput} type="text" name="physician_physicianName"></input>
        </div>

        <div className="col">
            <span className="form-text">Specialty</span>
            <input className="form-control" value={physician_specialty} onChange={handleInput} type="text" name="physician_specialty"></input>
          </div>
      </div>

      <div className="row">
        <div className="col">
          <span class="form-text">Practice Name</span>
          <input className="form-control" value={physician_practiceName} onChange={handleInput} type="text" name="physician_practiceName"></input>
          </div>

        <div className="col">
          <span className="form-text">Contact Name</span>
          <input className="form-control" value={physician_contactName} onChange={handleInput} type="text" name="physician_contactName"/>
        </div> 
      </div>

      <div className="row">
        <div className="col">
          <span className="form-text">E-Mail Address</span>
          <input className="form-control" value={physician_email} onChange={handleInput} type="text" name="physician_email"></input>
          </div>

      <div className="col">
        <span className="form-text">NPI Number</span>
        <input className="form-control" value={physician_npiNumber} onChange={handleInput} type="text" name="physician_npiNumber"></input>
      </div>

      </div>

    <div className="row">
      <div className="col">
        <span className="form-text">Address </span>
        <input className="form-control" value={physician_address} onChange={handleInput} type="text" name="physician_address"></input>
      </div>
      
      <div className="col">
        <span className="form-text">City</span>
        <input className="form-control" value={physician_city} onChange={handleInput} type="text" name="physician_city"></input>
        </div>
    </div>

    <div className="row">
      <div className="col">
        <span className="form-text">State</span>
        <input className="form-control" value={physician_state} onChange={handleInput} type="text" name="physician_state"></input>
      
      </div>

      <div className="col">
        <span className="form-text"> Zip Code </span>
        <input className="form-control" value={physician_zipcode} onChange={handleInput} type="text" name="physician_zipcode"/>
        </div>

    </div>

    <div className="row">
    <div className="col">
        <span className="form-text">Phone Number </span>
        <input className="form-control" value={physician_phoneNumber} onChange={handleInput} type="text" name="physician_phoneNumber"></input>
      </div>

      <div className="col">
      <span className="form-text">Fax Number</span>
      <input className="form-control" value={physician_faxNumber} onChange={handleInput} type="text" name="physician_faxNumber"></input>
      </div>
    </div>
  </form>

      <div className="row">
        <div className="col text-center">
          <button onClick={handleBackClick} type="submit" value="back" class="btn btn-secondary back-button m-3"> Back </button>
          <button onClick={handleNextClick} type="submit" value="next" class="btn btn-secondary next-button m-3"> Next </button>
        </div>
      </div>
  </div>
      
  );
}

export default PhysicianInformation;
