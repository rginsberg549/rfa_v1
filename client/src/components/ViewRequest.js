import React, { useContext } from "react";
import { Button, Input } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";
import EmployeeInformation from "./EmployeeInformation";
import PhysicianInformation from "./PhysicianInformation";
import ClaimsAdministratorInformation from "./ClaimsAdminInformation";
import RequestTreatments from "./RequestTeatments";
import SaveRequest from "./SaveRequest";

function ViewRequest() {
  let history = useHistory();

  const {
    updateContextField,
    state: {
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

  const handleInput = (event) => {
    event.preventDefault();
    updateContextField(event);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    history.push("/request-treatments");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
      <div class="view-request">
          <EmployeeInformation/>
            <hr></hr>
          <PhysicianInformation/>
          <hr></hr>
          <ClaimsAdministratorInformation/>
          <hr></hr>
          <RequestTreatments/>
          <hr></hr>
          <SaveRequest/>
          <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
      </div>
  );
}

export default ViewRequest;
