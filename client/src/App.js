import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import RequestType from "./components/RequestType";
import EmployeeInformation from "./components/EmployeeInformation";
import PhysicianInformation from "./components/PhysicianInformation";
import ClaimsAdministratorInformation from "./components/ClaimsAdminInformation";
import RequestTreatments from "./components/RequestTeatments";
import ViewRequest from "./components/ViewRequest";
import AllForms from "./components/AllForms";
import FormObject from "./utils/FormContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      newRequest: true, 
      expeditedReview: false, 
      oralRequest: false, 
      resubmission: false,
      employee_firstName: "Ryan",
      employee_middleName: "Mathew",
      employee_lastName: "Ginsberg",
      employee_dateOfInjury: "02/05/2018",
      employee_dateOfBirth: "04/03/1990",
      employee_claimNumber: "1254879",
      employee_employer: "Digital Deployment",
      physician_physicianName: "Dr. Navneet Sekhon, MD ",
      physician_practiceName: "Kaiser Permanente",
      physician_contactName: "Tahmina Aafreen",
      physician_address: "2120 Profession Dr.",
      physician_city: "Roseville",
      physician_state: "CA",
      physician_zipcode: "95661",
      physician_phoneNumber: "1(866)454-8855",
      physician_faxNumber: "1(866)454-8855",
      physician_specialty: "Internal Medicine",
      physician_npiNumber: "1649597428",
      physician_email: "kp@kaiser.org",
      claims_companyName: "Liberty Mutual Insurance Co",
      claims_contactName: "Verda B Covington",
      claims_address: "468  Neuport Lane",
      claims_city: "Norcross",
      claims_state: "GA",
      claims_zipcode: "30091",
      claims_phoneNumber: "770-366-4507",
      claims_faxNumber: "678-844-0416",
      claims_email: "678-914-0416",
      requestedTreatments: [],
    });
  }, []);

  const updateContextField = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const updateRequestedTreatments = (treatments) => {
    setState({ ...state, requestedTreatments: treatments});
  }

  return (
    <div className="container">
      
      <FormObject.Provider value={{ state, updateContextField, updateRequestedTreatments, setState}}>
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            
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

            <Route exact path="/view-request">
              <ViewRequest/>
            </Route>

            <Route exact path="/forms">
              <AllForms/>
            </Route>

          </Switch>
          <Footer/>
        </Router>
      </FormObject.Provider>
      
    </div>
  );
}

export default App;
