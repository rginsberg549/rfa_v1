import React, { useEffect, useState, componentDidMount } from "react";
import getDiagnosis from "../utils/getDiagnosis";
import getTreatments from "../utils/getTreatments";
import getRequirements from "../utils/getRequirements"
import { MenuItem, Select, TextareaAutosize, Button} from "@material-ui/core";
import axios from "axios";

function TreatmentRow(props) {
  const [treatmentRowState, setTreatmentRowState] = useState({id: props.rowKey});

  const [diagnosisState, setDiagnosisState] = useState("");
  const [treatmentState, setTreatmentState] = useState("");
  const [noteState, setNoteState] = useState("");
  const [diagnosisOptions, setDiagnosisOptions] = useState([]);
  const [treatmentOptions, setTreatmentOptions] = useState([]);

  useEffect(()=> {
    getDiagnosisOptions();

    if (props.row) {
      setDiagnosisState(props.row.diagnosis);
      setTreatmentState(props.row.treatment);
      setNoteState(props.row.note);
    }
  }, []);

  const getDiagnosisOptions = async () => {
    const data = await axios.get("/api/getDiagnoses");
    let options = [];
    for (let index = 0; index < data.data.length; index++) {
      const element = data.data[index]
      options.push(element.code);
    }
    setDiagnosisOptions(options);
  };


  const handleDiagnosisChange = (event) => {
    event.preventDefault();
    setDiagnosisState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ diagnosis: event.target.value }});
    props.updateTreatmentRow({...treatmentRowState, ...{ diagnosis: event.target.value }});
  };

  const handleTreatmentChange = (event) => {
    event.preventDefault();
    setTreatmentState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ treatment: event.target.value }});
    props.updateTreatmentRow({...treatmentRowState, ...{ treatment: event.target.value }});
  };

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNoteState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ note: event.target.value }});
    props.updateTreatmentRow({...treatmentRowState, ...{ note: event.target.value }});
  };


  const treatmentList = getTreatments(diagnosisState);
  const requirementList = getRequirements(diagnosisState, treatmentState);

  return (
    <form>
      <div>
        <label>Select A Diagnosis: </label>
        <Select onChange={handleDiagnosisChange} value={diagnosisState}>
          {diagnosisOptions.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <label>Select A Treatment</label>
        <Select onChange={handleTreatmentChange} value={treatmentState}>
          {treatmentList.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <label>Add Additional Notes</label>
        <TextareaAutosize onChange={handleNoteChange}/>
    </div>

    <div>
      <label>Requirements for Selected Diagnosis and Seletected Treatment</label>
      {requirementList.map((item, i) => (
            <li key={i} value={item}>{item} </li>))}
    </div>
    
    <Button onClick={() => props.deleteTreatmentRow(props.rowKey)}>Delete</Button>
    </form>
  );
}

export default TreatmentRow;
