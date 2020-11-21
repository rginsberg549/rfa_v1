import { createContext } from "react";

const FormObject = createContext({
  requestType: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfInjury: "",
  dateOfBirth: "",
  claimNumber: "",
  employer: "",
  updateContextField: () => {}
});

export default FormObject;