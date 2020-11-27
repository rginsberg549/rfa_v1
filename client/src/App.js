import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from "./components/Nav";
import RequestType from "./components/RequestType";
import EmployeeInformation from "./components/EmployeeInformation";
import PhysicianInformation from "./components/PhysicianInformation";
import ClaimsAdministratorInformation from "./components/ClaimsAdministratorInformation";
import RequestTreatments from "./components/RequestTeatments"
import FormObject from "./utils/FormContext";
import "./App.css";

function App() {

  const [state, setState] = useState({});

  useEffect(() => {
    setState({
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
      requestedTreatments: [],
    });
  }, []);

  const updateContextField = (event) => {
    const { name, value } = event.target;
    console.log(state);
    setState({ ...state, [name]: value });
  }

  const updateRequestedTreatments = (treatment) => {
    setState({ ...state, requestedTreatments: {
      ...state.requestedTreatments, treatment

    } });
  }

  return (
    <div className="container">
      <FormObject.Provider value={{ state, updateContextField, updateRequestedTreatments}}>
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

          </Switch>
        </Router>
      </FormObject.Provider>
    </div>
  );
}

export default App;
