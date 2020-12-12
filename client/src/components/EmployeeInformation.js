import React, { useContext, useState } from "react";
import { Button } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";

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
    history.push("/physician-information");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <div className="container">
      <h6 className="text-center">State of California, Division of Workers' Compensation</h6>
      <h6 className="text-center">DWC Form RFA</h6>
      <h3 className="text-center">Employee Information</h3>
      <form>
        <div class="row">
          <div class="col">
            <span class="form-text">First Name</span>
            <input type="text" class="form-control" value={employee_firstName} onChange={handleInput} type="text" name="employee_firstName"/>
            </div>
        
        <div class="col">
        <span class="form-text">Middle Name</span>
          <input type="text" class="form-control" value={employee_middleName} onChange={handleInput} type="text" name="employee_middleName"/>
          </div>
        
        <div class="col">
        <span class="form-text">Last Name</span>
          <input type="text" class="form-control" value={employee_lastName} onChange={handleInput} type="text" name="employee_lastName"/>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <span class="form-text">Date of Injury</span>
            <input type="date" class="form-control" value={employee_dateOfInjury} onChange={handleInput} name="employee_dateOfInjury" />
          </div>
          
          <div className="col-6">
          <span class="form-text">Date of Birth</span>
            <input type="date" class="form-control"  value={employee_dateOfBirth} onChange={handleInput} name="employee_dateOfBirth"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <span class="form-text">Claim Number</span>
            <input ype="text" class="form-control" placeholder="Claim Number" value={employee_claimNumber} onChange={handleInput} type="text" name="employee_claimNumber" />
          </div>


          <div className="col">
          <span class="form-text">Employer</span>
          <input ype="text" class="form-control" placeholder="Employee" value={employee_employer} onChange={handleInput} type="text" name="employee_employer"/>
          </div>
        </div>
        </form>
        
        <div classNAme="row">
          <div className="col text-center">
            <button onClick={handleBackClick} type="submit" value="back" class="btn btn-secondary back-button m-3"> Back </button>
            <button onClick={handleNextClick} type="submit" value="next" class="btn btn-secondary next-button m-3"> Next </button>
          </div>
          
        </div> 
  </div>
);
}

export default EmployeeInformation;
