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
    <div class="view-request">
      <div>Request Type : {requestType}</div>
      <div>Employee Name: {employee_firstName}</div>
      <div>Employee Middle Name: {employee_middleName}</div>
      <div>Employee Last Name: {employee_lastName}</div>
      <div>Date of Injury: {employee_dateOfInjury}</div>
      <div>Date of Birth: {employee_dateOfBirth}</div>
      <div>Claim Number: {employee_claimNumber}</div>
      <div>Employer: {employee_employer}</div>
      <div>Physician Name: {physician_physicianName}</div>
      <div>Practice Name: {physician_practiceName}</div>
      <div>Physician Contact: {physician_contactName}</div>
      <div>Physician Address: {physician_address}</div>
      <div>Physician City: {physician_city}</div>
      <div>Physician State: {physician_state}</div>
      <div>Phyzisican Zipcode: {physician_zipcode}</div>
      <div>Physician Phone Number: {physician_phoneNumber}</div>
      <div>Physican Fax Number: {physician_faxNumber}</div>
      <div>Physician Specialty: {physician_specialty}</div>
      <div>Physician NPI Number: {physician_npiNumber}</div>
      <div>Physician Email: {physician_email}</div>
      <div>Claims Company: {claims_companyName}</div>
      <div>Claims Contact Name: {claims_contactName}</div>
      <div>Claims Address: {claims_address}</div>
      <div>Claims City: {claims_city}</div>
      <div>Claims State: {claims_state}</div>
      <div>Claims Zipcode: {claims_zipcode}</div>
      <div>Claims Phone Number: {claims_phoneNumber}</div>
      <div>Claims Fax Number: {claims_faxNumber}</div>
      <div>Claims Email Address: {claims_email}</div>
      <div>Requested Treatments:</div>

      {requestedTreatments.length && requestedTreatments.map((item, i) => {
      console.log(requestedTreatments);
        return (
        <div>
          <div>Diagnosis: {item.diagnosisName}</div>
          <div>Treatment: {item.treatmentName}</div>
          <div>Note: {item.note}</div>
        </div>
        )
      })}


      <Button onClick={handleBackClick} type="submit" value="back">
        Back
      </Button>
      <SaveRequest/>
    </div>
  );
}

export default ViewRequest;
