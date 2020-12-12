import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from "./components/Nav";
import RequestType from "./components/RequestType";
import EmployeeInformation from "./components/EmployeeInformation";
import PhysicianInformation from "./components/PhysicianInformation";
import ClaimsAdministratorInformation from "./components/ClaimsAdminInformation";
import RequestTreatments from "./components/RequestTeatments";
import UploadSupportingDocuments from "./components/UploadSupportingDocuments";
import ViewRequest from "./components/ViewRequest";
import SaveRequest from "./components/SaveRequest";
import AllForms from "./components/AllForms";
import FormObject from "./utils/FormContext";
import "./App.css";

function App() {

  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      requestType: "New Request",
      employee_firstName: "employee_firstName",
      employee_middleName: "employee_middleName",
      employee_lastName: "employee_lastName",
      employee_dateOfInjury: "employee_dateOfInjury",
      employee_dateOfBirth: "employee_dateOfBirth",
      employee_claimNumber: "employee_claimNumber",
      employee_employer: "employee_employer",
      physician_physicianName: "physician_physicianName",
      physician_practiceName: "physician_practiceName",
      physician_contactName: "physician_contactName",
      physician_address: "physician_address",
      physician_city: "physician_city",
      physician_state: "physician_state",
      physician_zipcode: "physician_zipcode",
      physician_phoneNumber: "physician_phoneNumber",
      physician_faxNumber: "physician_faxNumber",
      physician_specialty: "physician_specialty",
      physician_npiNumber: "physician_npiNumber",
      physician_email: "physician_email",
      claims_companyName: "claims_companyName",
      claims_contactName: "claims_contactName",
      claims_address: "claims_address",
      claims_city: "claims_city",
      claims_state: "claims_state",
      claims_zipcode: "claims_zipcode",
      claims_phoneNumber: "claims_phoneNumber",
      claims_faxNumber: "claims_faxNumber",
      claims_email: "claims_email",
      requestedTreatments: [],
    });
  }, []);

  const updateContextField = (event) => {
    const { name, value } = event.target;
    console.log("Current State", state);
    setState({ ...state, [name]: value });
  }

  const updateRequestedTreatments = (treatments) => {
    console.log('treatments', treatments);
    setState({ ...state, requestedTreatments: treatments});
  }

  const updateSupportingDocuments = (documents) => {
    console.log('documents', documents);
    setState({ ...state, supportingDocuments: documents});
  }

  return (
    <div className="container">
      <FormObject.Provider value={{ state, updateContextField, updateRequestedTreatments, updateSupportingDocuments}}>
        <Router>
          <Switch>
            <Route exact path="/" component={Nav} />
            
            <Route exact path="/request-type" >
              <RequestType />
            </Route>
            
            <Route exact path="/new-employee-information">
              <EmployeeInformation />
            </Route>

            <Route exact path="/physician-information">
              <PhysicianInformation />
            </Route>

            <Route exact path="/claims-administrator-information">
              <ClaimsAdministratorInformation/>
            </Route>

            <Route exact path="/request-treatments">
              <RequestTreatments/>
            </Route>

            {/* <Route exact path="/upload-supporting-documents">
              <UploadSupportingDocuments/>
            </Route> */}

            <Route exact path="/view-request">
              <ViewRequest/>
            </Route>

            <Route exact path="/forms">
              <AllForms/>
            </Route>

          </Switch>
        </Router>
      </FormObject.Provider>
    </div>
  );
}

export default App;
