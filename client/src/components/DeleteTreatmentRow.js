import React from "react";
import { Button } from '@material-ui/core';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteTreatmentRow(props) {
  return (
      <Button {...props}>Delete</Button>
  );
}

export default DeleteTreatmentRow;