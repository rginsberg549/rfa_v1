import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';



function SaveRequest() {

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
      requestedTreatments
    },
  } = useContext(FormObject);

  const handleNextClick = (event)=> {
    event.preventDefault();
    history.push("/all-requests");
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  function save() {

    axios
      .post("/api/form", {
          requestType: requestType,
          employee: {
            firstName: employee_firstName,
            middleName: employee_middleName,
            lastName: employee_lastName,
            dateOfInjury: employee_dateOfInjury,
            dateOfBirth: employee_dateOfBirth,
            claimNumber: employee_claimNumber,
            employer: employee_employer,
          },
          physician: {
            physicianName: physician_physicianName,
            practiceName: physician_practiceName,
            contactName: physician_contactName,
            address: physician_address,
            city: physician_city,
            state: physician_state,
            zipCode: physician_zipcode,
            phoneNumber: physician_phoneNumber,
            faxNumber: physician_faxNumber,
            specialty: physician_specialty,
            npiNumber: physician_npiNumber,
            emailAddress: physician_email
          },
          claimsAdmin: {
            companyName: claims_companyName,
            contactName: claims_contactName,
            address: claims_address,
            city: claims_city,
            state: claims_state,
            zipCode: claims_zipcode,
            phoneNumber: claims_phoneNumber,
            faxNumber: claims_faxNumber,
            emailAddress: claims_email,
          },
          treatmentRowData: requestedTreatments
        }).then(()=> {
          history.push("/forms")
        }
        )}
  
        return (
        <div>
          <button className="btn btn-success m-3" onClick={save}>Save Request</button>
        </div>
        )};

export default SaveRequest;
