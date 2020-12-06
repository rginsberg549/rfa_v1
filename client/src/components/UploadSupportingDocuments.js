import React, { useContext } from "react";
import { Button, Input } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";

function ClaimsAdministratorInformation() {
  let history = useHistory();

  const { updateContextField } = useContext(FormObject);

  const handleInput = (event) => {
    event.preventDefault();
    updateContextField(event);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    history.push("/review-request");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <form>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button>
      <Button onClick={handleBackClick} type="submit" value="back">
        Back
      </Button>
      <Button onClick={handleNextClick} type="submit" value="next">
        Next
      </Button>
    </form>
  );
}

export default ClaimsAdministratorInformation;
