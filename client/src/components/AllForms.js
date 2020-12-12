import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";

function AllForms() {
  const [formData, setFormData] = useState("");

  useEffect(() => {
    getForms();
  }, []);

  const getForms = async () => {
    const data = await axios.get("api/form");
    console.log(data);
    setFormData(data.data);
  };

  return (
  <div>Hello</div>
  );
}

export default AllForms;
