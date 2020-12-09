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
    <form>
      <label>
        Physician Name
        <input
          value={physician_physicianName}
          onChange={handleInput}
          type="text"
          name="physician_physicianName"
        />
      </label>
      <label>
        Practice Name
        <input
          value={physician_practiceName}
          onChange={handleInput}
          type="text"
          name="physician_practiceName"
        />
      </label>
      <label>
        Contact Name
        <input
          value={physician_contactName}
          onChange={handleInput}
          type="text"
          name="physician_contactName"
        />
      </label>
      <label>
        Address
        <input
          value={physician_address}
          onChange={handleInput}
          type="text"
          name="physician_address"
        />
      </label>
      <label>
        City
        <input
          value={physician_city}
          onChange={handleInput}
          type="text"
          name="physician_city"
        />
      </label>
      <label>
        State
        <input
          value={physician_state}
          onChange={handleInput}
          type="text"
          name="physician_state"
        />
      </label>
      <label>
        Zip Code
        <input
          value={physician_zipcode}
          onChange={handleInput}
          type="text"
          name="physician_zipcode"
        />
      </label>
      <label>
        Phone Number
        <input
          value={physician_phoneNumber}
          onChange={handleInput}
          type="text"
          name="physician_phoneNumber"
        />
      </label>
      <label>
        Fax Number
        <input
          value={physician_faxNumber}
          onChange={handleInput}
          type="text"
          name="physician_faxNumber"
        />
      </label>
      <label>
        E-Mail Address
        <input
          value={physician_email}
          onChange={handleInput}
          type="text"
          name="physician_email"
        />
      </label>
      <label>
        Specialty
        <input
          value={physician_specialty}
          onChange={handleInput}
          type="text"
          name="physician_specialty"
        />
      </label>
      <label>
        NPI Number
        <input
          value={physician_npiNumber}
          onChange={handleInput}
          type="text"
          name="physician_npiNumber"
        />
      </label>

      <Button onClick={handleBackClick} type="submit" value="back" class="back-button">
        Back
      </Button>
      <Button onClick={handleNextClick} type="submit" value="next" class="next-button">
        Next
      </Button>
    </form>
  );
}

export default PhysicianInformation;
