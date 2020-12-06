import React, { useContext } from "react";
import { Button, Input } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";

import EmployeeInformation from "../components/EmployeeInformation";

function ReviewRequest() {
  let history = useHistory();

  const { updateContextField } = useContext(FormObject);

  const handleInput = (event) => {
    event.preventDefault();
    updateContextField(event);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    history.push("/requests");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (

    <div>
        <div>
        <EmployeeInformation/>
        </div>
</div>
  );
}

export default ReviewRequest;
