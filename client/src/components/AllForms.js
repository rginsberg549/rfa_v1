import React, { useState, useEffect } from "react";
import axios from "axios";

function AllForms() {
  const [formData, setFormData] = useState("");

  useEffect(() => {
    const getForms = async () => {
      const data = await axios.get("api/form");
      console.log(data);
      setFormData(data.data);
  }
   getForms();
  }, []);
  
  return (
  <div>Hello</div>
  );
}

export default AllForms;
