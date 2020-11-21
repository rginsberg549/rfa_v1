import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from "./components/Nav";
import RequestType from "./components/RequestType";
import EmployeeInformation from "./components/EmployeeInformation";
import FormObject from "./utils/FormContext";
import "./App.css";

function App() {

  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      requestType: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfInjury: "",
      dateOfBirth: "",
      claimNumber: "",
      employer: ""
    });
  }, []);

  const updateContextField = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  return (
    <div className="container">
      <FormObject.Provider value={{ state, updateContextField }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Nav} />
            <Route exact path="/request-type" >
              <RequestType />
            </Route>
            <Route exact path="/new-employee-information">
              <EmployeeInformation />
            </Route>
          </Switch>
        </Router>
      </FormObject.Provider>
    </div>
  );
}

export default App;
