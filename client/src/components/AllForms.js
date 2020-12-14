import React, { useState, useEffect } from "react";
import axios from "axios";
import PDFLink from "./PDFLink";
import { useHistory } from "react-router-dom";


function AllForms() {

  let history = useHistory();

  const [formData, setFormData] = useState([]);
  
  const [tableData, setTableData] = useState({
    colums: ["First Name", "Last Name", "Request Type", "Claim Number", "PDF Link"],
  });

  useEffect(() => {
    const getForms = async () => {
      const data = await axios.get("api/form");
      console.log(data);
      setFormData(data.data);
      console.log(formData)
  }
   getForms();
  }, []);

  const handleHomeClick = (event) => {
    event.preventDefault();
    history.push("/");
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    history.goBack();
  };

  

  return (
  <div class="container">
    <h6 className="text-center">State of California, Division of Workers' Compensation</h6>
      <h6 className="text-center">DWC Form RFA</h6>
      <h3 className="text-center">All RFA Forms</h3>

      <table class="table table-hover">
  <thead>
    <tr>
      {tableData.colums.map((column,index) => {
        return (
        <th scope="col">{column}</th>
        )
      })}
    </tr>
  </thead>
  <tbody>
    {formData.map((row,index) => {
        return (
        <tr>
          <td scope="col">{row.Employee.firstName}</td>
          <td scope="col"> {row.Employee.lastName}</td>
          <td scope="col">{row.requestType}</td>
          <td scope="col">{row.Employee.claimNumber}</td>
          <td scope="col"><a target="_blank" href={row.pdfURL}>Download PDF</a></td>
           </tr>
        )
      })}
  </tbody>
</table>

<div className="row">
          <div className="col text-center">
            <button onClick={handleBackClick} type="submit" value="back" class="btn btn-secondary back-button m-3"> Back </button>
            <button onClick={handleHomeClick} type="submit" value="next" class="btn btn-secondary next-button m-3"> Submit Another Form </button>
          </div>
  </div>
</div>
  );
}

export default AllForms;
