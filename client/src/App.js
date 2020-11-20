import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from "./components/Nav";
import RequestType from "./components/RequestType";
import FormContext from "./utils/FormContext";
import "./App.css";

function App() {
  const [formState, setFormState] = useState({
    name: "",
  });

  return (
    <div className="container">
      <FormContext.Provider value={formState}>
      <Router>
        <Switch>
            <Route exact path="/" component={Nav}/>
            <Route exact path="/request-type" component={RequestType}/> 
        </Switch>
      </Router>
      </FormContext.Provider>
    </div>
  );
}

export default App;
