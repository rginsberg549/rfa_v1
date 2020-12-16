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
      <h2 className="text-center mt-3 mb-3">Employee Information</h2>
      <hr className="mb-4"></hr>
      <hr></hr>

      <form>
        <div className="row">
          <div className="col-4">
            <span className="form-text">First Name</span>
            <input type="text" className="form-control" value={employee_firstName} onChange={handleInput} type="text" name="employee_firstName"/>
           </div>
        
        <div className="col-4">
        <span className="form-text">Middle Name</span>
          <input type="text" className="form-control" value={employee_middleName} onChange={handleInput} type="text" name="employee_middleName"/>
          </div>
        
        <div className="col-4">
        <span className="form-text">Last Name</span>
          <input type="text" className="form-control" value={employee_lastName} onChange={handleInput} type="text" name="employee_lastName"/>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <span className="form-text">Date of Injury</span>
            <input type="date" className="form-control" value={employee_dateOfInjury} onChange={handleInput} name="employee_dateOfInjury" />
          </div>
          
          <div className="col-6">
          <span className="form-text">Date of Birth</span>
            <input type="date" className="form-control"  value={employee_dateOfBirth} onChange={handleInput} name="employee_dateOfBirth"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <span className="form-text">Claim Number</span>
            <input type="text" className="form-control" placeholder="Claim Number" value={employee_claimNumber} onChange={handleInput} type="text" name="employee_claimNumber" />
          </div>


          <div className="col-6">
          <span className="form-text">Employer</span>
          <input type="text" className="form-control" placeholder="Employee" value={employee_employer} onChange={handleInput} type="text" name="employee_employer"/>
          </div>
        </div>
        </form>
        
        <div className="row mt-5 pt-5">
          <div className="col text-center">
            <button onClick={handleBackClick} type="submit" value="back" className="btn btn-secondary back-button m-3"> Back </button>
            <button onClick={handleNextClick} type="submit" value="next" className="btn btn-secondary next-button m-3"> Next </button>
          </div>
          
        </div> 
  </div>
);
}

export default EmployeeInformation;
