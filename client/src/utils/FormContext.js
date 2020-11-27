import React, { createContext } from "react";

const FormObject = createContext({
  requestType: "",
  employee_firstName: "",
  employee_middleName: "",
  employee_lastName: "",
  employee_dateOfInjury: "",
  employee_dateOfBirth: "",
  employee_claimNumber: "",
  employee_employer: "",
  physician_physicianName: "",
  physician_practiceName: "",
  physician_contactName: "",
  physician_address: "",
  physician_city: "",
  physician_state: "",
  physician_zipcode: "",
  physician_phoneNumber: "",
  physician_faxNumber: "",
  physician_specialty: "",
  physician_npiNumber: "",
  physician_email: "",
  claims_companyName: "",
  claims_contactName: "",
  claims_address: "",
  claims_city: "",
  claims_state: "",
  claims_zipcode: "",
  claims_phoneNumber: "",
  claims_faxNumber: "",
  claims_physicianEmail: "",
  requestedTreatments: [
    {
    "SelectedDiagnosis": "Selected diagnosis value",
    "SelectedTreatments": ["Treatment 1"], 
    "AdditionalNotes": ["Notes 1"]}
  ],
  updateContextField: () => {},
  updateTreatmentPlan: () => {},
});

export default FormObject;
