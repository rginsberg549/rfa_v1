import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import FormObject from "../utils/FormContext";
import { useHistory } from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveRequest() {

  let history = useHistory();
  
  const {
    state: {
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

    console.log("State", );

    axios
      .post("/api/employee", {
        firstName: employee_firstName,
        middleName: employee_middleName,
        lastName: employee_lastName,
        dateOfInjury: employee_dateOfInjury,
        dateOfBirth: employee_dateOfBirth,
        claimNumber: employee_claimNumber,
        employer: employee_employer,
      })
      .then(
        axios
          .post("/api/physician", {
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
            emailAddress: physician_email,
          })
          .then(
            axios.post("/api/claims-admin", {
              companyName: claims_companyName,
              contactName: claims_contactName,
              address: claims_address,
              city: claims_city,
              state: claims_state,
              zipCode: claims_zipcode,
              phoneNumber: claims_phoneNumber,
              faxNumber: claims_faxNumber,
              emailAddress: claims_email,
            }).then(()=> {
              history.push("/all-requests");
            }   
            )
          )
      );
  }

  return (
  <div>
    <Button onClick={save}>Save Request</Button>
  </div>);
}

export default SaveRequest;
