import React, { useContext } from "react";
import { Button, Input } from "@material-ui/core";
import FormObject from "../utils/FormContext";
import { useHistory } from "react-router-dom";

function ClaimsAdministratorInformation() {
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
    <form>
      <label>
        Company Name
        <input
          value={claims_companyName}
          onChange={handleInput}
          type="text"
          name="claims_companyName"
        />
      </label>
      <label>
        Contact Name
        <input
          value={claims_contactName}
          onChange={handleInput}
          type="text"
          name="claims_contactName"
        />
      </label>
      <label>
        Address
        <input
          value={claims_address}
          onChange={handleInput}
          type="text"
          name="claims_address"
        />
      </label>
      <label>
        City
        <input
          value={claims_city}
          onChange={handleInput}
          type="text"
          name="claims_city"
        />
      </label>
      <label>
        State
        <input
          value={claims_state}
          onChange={handleInput}
          type="text"
          name="claims_state"
        />
      </label>
      <label>
        Zip Code
        <input
          value={claims_zipcode}
          onChange={handleInput}
          type="text"
          name="claims_zipcode"
        />
      </label>
      <label>
        Phone Number
        <input
          value={claims_phoneNumber}
          onChange={handleInput}
          type="text"
          name="claims_phoneNumber"
        />
      </label>
      <label>
        Fax Number
        <input
          value={claims_faxNumber}
          onChange={handleInput}
          type="text"
          name="claims_faxNumber"
        />
      </label>
      <label>
        E-Mail Address
        <input
          value={claims_email}
          onChange={handleInput}
          type="text"
          name="claims_email"
        />
      </label>
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
