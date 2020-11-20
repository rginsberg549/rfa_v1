import React from "react";
import Button from '@material-ui/core/Button';



function RequestType() {
  return (
    <div>
    <Button variant="contained" to="/new/location/">New Request</Button>
    <Button variant="contained">Expedited Review</Button>
    <Button variant="contained">Written Confirmation of Oral Request</Button>
    <Button variant="contained">Resubmission</Button>
    </div>
  )}

export default RequestType;