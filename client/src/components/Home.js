import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import RequestType from './RequestType';


function Home() {
  return ( 
    <div className="container">
      <h6 className="text-center">State of California, Division of Workers' Compensation</h6>
      <h3 className="text-center">Request for Authorization Form</h3>
      <h6 className="text-center">DWC Form RFA</h6>
      <RequestType/>
    </div>
  );
}

export default Home;