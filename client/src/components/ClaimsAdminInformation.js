import React, { useContext } from "react";
import { Button, Input } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";

function ClaimsAdministratorInformation() {
  let history = useHistory();

  const {
    updateContextField,
    state: {
      claims_companyName,
      claims_contactName,
      claims_address,
      claims_city,
      claims_state,
      claims_zipcode,
      claims_phoneNumber,
      claims_faxNumber,
      claims_email,
    },
  } = useContext(FormObject);

  const handleInput = (event) => {
    event.preventDefault();
    updateContextField(event);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    history.push("/request-treatments");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
  
  <div className="container">
    <h3 className="text-center mt-2">Claims Administrator Information</h3>

<form>
  <div className="row">
    <div className="col">
      <span className="form-text">Company Name</span>
      <input className="form-control" value={claims_companyName} onChange={handleInput} type="text" name="claims_companyName"></input>
    </div>

   
  </div>


  <div className="row">

  <div className="col">
      <span className="form-text">Contact Name</span>
      <input className="form-control" value={claims_contactName} onChange={handleInput} type="text" name="claims_contactName"/>
    </div> 
    
    <div className="col">
      <span className="form-text">E-Mail Address</span>
      <input className="form-control" value={claims_email} onChange={handleInput} type="text" name="claims_email"></input>
      </div>
  </div>

<div className="row">
  <div className="col">
    <span className="form-text">Address </span>
    <input className="form-control" value={claims_address} onChange={handleInput} type="text" name="claims_address"></input>
  </div>
  
  <div className="col">
    <span className="form-text">City</span>
    <input className="form-control" value={claims_city} onChange={handleInput} type="text" name="claims_city"></input>
    </div>
</div>

<div className="row">
  <div className="col">
    <span className="form-text">State</span>
    <input className="form-control" value={claims_state} onChange={handleInput} type="text" name="claims_state"></input>
  
  </div>

  <div className="col">
    <span className="form-text"> Zip Code </span>
    <input className="form-control" value={claims_zipcode} onChange={handleInput} type="text" name="claims_zipcode"/>
    </div>

</div>

<div className="row">
<div className="col">
    <span className="form-text">Phone Number </span>
    <input className="form-control" value={claims_phoneNumber} onChange={handleInput} type="text" name="claims_phoneNumber"></input>
  </div>

  <div className="col">
  <span className="form-text">Fax Number</span>
  <input className="form-control" value={claims_faxNumber} onChange={handleInput} type="text" name="claims_faxNumber"></input>
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
)
};

export default ClaimsAdministratorInformation;
