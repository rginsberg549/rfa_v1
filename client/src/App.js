import React, { useState, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from "./components/Nav";
import RequestType from "./components/RequestType";
import EmployeeInformation from "./components/EmployeeInformation";
import FormObject from "./utils/FormContext";
import "./App.css";

function App() {
  const [formObject, setFormObject] = useState({
    requestType: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfInjury: "",
    dateOfBirth: "",
    claimNumber: "",
    employer: "",
    updateContextField: (event) => {
      const { name, value } = event.target;
      console.log(name);
      console.log(value);
      setFormObject({...formObject, [name]: value})
      },
  });
  
  console.log(formObject)

  return (
    <div className="container">
      <FormObject.Provider value={formObject}>
      <Router>
        <Switch>
            <Route exact path="/" component={Nav}/>
            <Route exact path="/request-type" component={RequestType}/>
            <Route exact path="/new-employee-information" component={EmployeeInformation}/>
        </Switch>
      </Router>
      </FormObject.Provider>
    </div>
  );
}

export default App;
