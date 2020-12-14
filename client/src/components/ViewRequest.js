import React, { useContext } from "react";
import { Button, Input } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";
import EmployeeInformation from "./EmployeeInformation";
import PhysicianInformation from "./PhysicianInformation";
import ClaimsAdministratorInformation from "./ClaimsAdminInformation";
import RequestTreatments from "./RequestTeatments";
import SaveRequest from "./SaveRequest";

function ViewRequest() {
  let history = useHistory();

  const {
    state: {
      requestType,
      employee_firstName,
      employee_middleName,
      employee_lastName,
      employee_dateOfInjury,
      employee_dateOfBirth,
      employee_claimNumber,
      employee_employer,
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
      claims_companyName,
      claims_contactName,
      claims_address,
      claims_city,
      claims_state,
      claims_zipcode,
      claims_phoneNumber,
      claims_faxNumber,
      claims_email,
      requestedTreatments = []
    },
  } = useContext(FormObject);

  const handleNextClick = (event) => {
    event.preventDefault();
    history.push("/forms");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <div class="container view-request">
      <h6 className="text-center">State of California, Division of Workers' Compensation</h6>
      <h6 className="text-center">DWC Form RFA</h6>
      
      <div className="row employee-information-row">
      <h3 className="">Employee Information</h3>
      
      <div className="row">
        <div class="col">
          <span class="form-text">First Name</span>
          <input disabled type="text" class="form-control" value={employee_firstName} type="text" name="employee_firstName"/>
          </div>
    
    <div class="col">
    <span class="form-text">Middle Name</span>
      <input disabled type="text" class="form-control" value={employee_middleName} type="text" name="employee_middleName"/>
      </div>
    
    <div class="col">
    <span class="form-text">Last Name</span>
      <input disabled type="text" class="form-control" value={employee_lastName} type="text" name="employee_lastName"/>
      </div>
    </div>

      <div className="row">
      <div className="col-6">
        <span class="form-text">Date of Injury</span>
        <input disabled type="date" class="form-control" value={employee_dateOfInjury} name="employee_dateOfInjury" />
      </div>
      
      <div className="col-6">
        <span class="form-text">Date of Birth</span>
        <input disabled type="date" class="form-control"  value={employee_dateOfBirth} name="employee_dateOfBirth"/>
      </div>
    </div>

      <div className="row">
        <div className="col">
          <span class="form-text">Claim Number</span>
          <input disabled type="text" class="form-control" placeholder="Claim Number" value={employee_claimNumber} type="text" name="employee_claimNumber" />
      </div>


      <div className="col">
      <span class="form-text">Employer</span>
      <input disabled type="text" class="form-control" placeholder="Employee" value={employee_employer} type="text" name="employee_employer"/>
      </div>
    </div>
  </div>

  
      <hr></hr>

     <div className="row physician-information-row">
       <h3 className="">Physician Information</h3>
    

      <div className="row">
        <div className="col">
          <span className="form-text">Physician Name</span>
          <input disabled className="form-control" value={physician_physicianName} type="text" name="physician_physicianName"></input>
        </div>

        <div className="col">
            <span className="form-text">Specialty</span>
            <input disabled className="form-control" value={physician_specialty} type="text" name="physician_specialty"></input>
          </div>
      </div>

      <div className="row">
        <div className="col">
          <span class="form-text">Practice Name</span>
          <input disabled className="form-control" value={physician_practiceName} type="text" name="physician_practiceName"></input>
          </div>

        <div className="col">
          <span className="form-text">Contact Name</span>
          <input disabled className="form-control" value={physician_contactName} type="text" name="physician_contactName"/>
        </div> 
      </div>

      <div className="row">
        <div className="col">
          <span className="form-text">E-Mail Address</span>
          <input disabled className="form-control" value={physician_email} type="text" name="physician_email"></input>
          </div>

      <div className="col">
        <span className="form-text">NPI Number</span>
        <input disabled className="form-control" value={physician_npiNumber} type="text" name="physician_npiNumber"></input>
      </div>

      </div>

    <div className="row">
      <div className="col">
        <span className="form-text">Address </span>
        <input disabled className="form-control" value={physician_address} type="text" name="physician_address"></input>
      </div>
      
      <div className="col">
        <span className="form-text">City</span>
        <input disabled className="form-control" value={physician_city} type="text" name="physician_city"></input>
        </div>
    </div>

    <div className="row">
      <div className="col">
        <span className="form-text">State</span>
        <input disabled className="form-control" value={physician_state} type="text" name="physician_state"></input>
      
      </div>

      <div className="col">
        <span className="form-text"> Zip Code </span>
        <input disabled className="form-control" value={physician_zipcode} type="text" name="physician_zipcode"/>
        </div>

    </div>

    <div className="row">
    <div className="col">
        <span className="form-text">Phone Number </span>
        <input disabled className="form-control" value={physician_phoneNumber} type="text" name="physician_phoneNumber"></input>
      </div>

      <div className="col">
      <span className="form-text">Fax Number</span>
      <input disabled className="form-control" value={physician_faxNumber} type="text" name="physician_faxNumber"></input>
      </div>
    </div>
  </div>
      
      
      <hr></hr>
  <div className="row claims-admin-information">
    <h3 className="">Claims Administrator Information</h3>
  
  <div className="row">
    <div className="col">
      <span className="form-text">Contact Name</span>
      <input disabled className="form-control" value={claims_contactName} type="text" name="claims_contactName"/>
    </div> 
    
    <div className="col">
      <span className="form-text">E-Mail Address</span>
      <input disabled className="form-control" value={claims_email} type="text" name="claims_email"></input>
      </div>
  </div>

  <div className="row">
    <div className="col">
      <span className="form-text">Address </span>
      <input disabled className="form-control" value={claims_address} type="text" name="claims_address"></input>
    </div>
  
    <div className="col">
      <span className="form-text">City</span>
      <input disabled className="form-control" value={claims_city} type="text" name="claims_city"></input>
    </div>
  </div>

<div className="row">
  <div className="col">
    <span className="form-text">State</span>
    <input disabled className="form-control" value={claims_state} type="text" name="claims_state"></input>
  
  </div>

  <div className="col">
    <span className="form-text"> Zip Code </span>
    <input disabled className="form-control" value={claims_zipcode} type="text" name="claims_zipcode"/>
    </div>

</div>

  <div className="row">
    <div className="col">
      <span className="form-text">Phone Number </span>
      <input disabled className="form-control" value={claims_phoneNumber} type="text" name="claims_phoneNumber"></input>
  </div>

  <div className="col">
  <span className="form-text">Fax Number</span>
  <input disabled className="form-control" value={claims_faxNumber} type="text" name="claims_faxNumber"></input>
  </div>
</div>
</div>

<hr></hr>

      <div className="row">
        <h3>Requested Treatments</h3>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Diagnosis</th>
              <th scope="col">Treatment</th>
              <th scope="col">Other Information</th>
            </tr>
          </thead>
            
      {requestedTreatments.length && requestedTreatments.map((item, i) => {
        return (
          <tbody>
              <tr>
                <td className="col">{item.diagnosisName}</td>
                <td className="col">{item.treatmentName}</td>
                <td className="col">{item.note}</td>
              </tr>
            </tbody>
        )
      })}
    </table>
    </div>
    <div className="row">
      <div className="col"><strong>Total Number of Requested Treatments:</strong> {requestedTreatments.length}</div>
    </div>
    <div className="row mt-5">
    <div  className="col-6"><button className="btn btn-secondary m-3" onClick={handleBackClick} type="submit" value="back">Back</button></div>
    <div className="col-6"> <SaveRequest/></div>
    </div>
    
  </div>
  );
}

export default ViewRequest;
