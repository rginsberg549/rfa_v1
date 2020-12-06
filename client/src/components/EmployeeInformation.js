import React, { useContext, useState } from "react";
import { Button, Input } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

function EmployeeInformation() {
  let history = useHistory();

  const {
    updateContextField,
    state: {
      employee_firstName,
      employee_middleName,
      employee_lastName,
      employee_dateOfInjury,
      employee_dateOfBirth,
      employee_claimNumber,
      employee_employer,
    },
  } = useContext(FormObject);

  const handleInput = (event) => {
    event.preventDefault();
    updateContextField(event);
    console.log(FormObject);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    //axios.post("/api/employee", employeeState)
    history.push("/physician-information");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <form>
      <label>
        First Name
        <input
          value={employee_firstName}
          onChange={handleInput}
          type="text"
          name="employee_firstName"
        />
      </label>
      <label>
        Middle Name
        <input
          value={employee_middleName}
          onChange={handleInput}
          type="text"
          name="employee_middleName"
        />
      </label>
      <label>
        Last Name
        <input
          value={employee_lastName}
          onChange={handleInput}
          type="text"
          name="employee_lastName"
        />
      </label>
      <label>
        Date of Injury Name
        <input
          value={employee_dateOfInjury}
          onChange={handleInput}
          type="date"
          name="employee_dateOfInjury"
        />
      </label>
      <label>
        Date of Birth
        <input
          value={employee_dateOfBirth}
          onChange={handleInput}
          type="date"
          name="employee_dateOfBirth"
        />
      </label>
      <label>
        Claim Number
        <input
          value={employee_claimNumber}
          onChange={handleInput}
          type="number"
          name="employee_claimNumber"
        />
      </label>
      <label>
        Employer
        <input
          value={employee_employer}
          onChange={handleInput}
          type="text"
          name="employee_employer"
        />
      </label>
      <Button onClick={handleBackClick} type="submit" value="back">
        Back
      </Button>
      <Button onClick={handleNextClick} type="submit" value="next">
        Next
      </Button>
    </form>
  );
}

export default EmployeeInformation;
