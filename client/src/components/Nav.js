import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


function Nav() {
  return ( 
    <div className="navbar navbar-light bg-light mb-5">
      <span className="navbar-brand mb-0 h1">Request for Authorization Form</span>
      <Button variant="contained" component={Link} to="/request-type">Start</Button>
    </div>
  );
}

export default Nav;