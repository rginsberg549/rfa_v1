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
  const [requirements, setRequirements] = useState([]);

  useEffect(()=> {
    getDiagnosisOptions();
  }, []);

  useEffect(()=> {
    if (props.row) {
      setDiagnosisState(props.row.diagnosisId);
      getTreatmentOptions(props.row.diagnosisId);
      setTreatmentState(props.row.treatmentId);
      getRequirements(props.row.treatmentId);
      setNoteState(props.row.note);
    }
  }, []);

  const getDiagnosisOptions = async () => {
    const data = await getDiagnosis();
    setDiagnosisOptions(data.data);
  };

  const getTreatmentOptions = async (val) => {
    const data = await axios.get("api/getTreatments/" + val)
    setTreatmentOptions(data.data);
  }

  const getRequirements = async (val_1) => {
    const data = await axios.get("api/getRequirements/" + val_1);
    setRequirements(data.data);
  } 

  const handleDiagnosisChange = (event) => {
    event.preventDefault();
    const diagnosis = diagnosisOptions.find(item => item.id === event.target.value);
    setTreatmentState("");
    setRequirements([]);
    getTreatmentOptions(event.target.value);
    setDiagnosisState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ diagnosisName: diagnosis.diagnosisName, diagnosisId: event.target.value}});
    props.updateTreatmentRow({...treatmentRowState, ...{ diagnosisName: diagnosis.diagnosisName, diagnosisId: event.target.value }});
  };

  const handleTreatmentChange = (event) => {
    event.preventDefault();
    const treatment = treatmentOptions.find(item => item.id === event.target.value)
    getRequirements(diagnosisState, event.target.value);
    setTreatmentState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ treatmentName: treatment.treatmentName, treatmentId: event.target.value }});
    props.updateTreatmentRow({...treatmentRowState, ...{ treatmentName: treatment.treatmentName, treatmentId: event.target.value }});

  };

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNoteState(event.target.value);
    setTreatmentRowState({...treatmentRowState, ...{ note: event.target.value }});
    props.updateTreatmentRow({...treatmentRowState, ...{ note: event.target.value }});
  };

  console.log("Diagnosis Options", diagnosisOptions);

  return (
    <form>
      <div>
        <label>Select A Diagnosis: </label>
        <Select onChange={handleDiagnosisChange} value={diagnosisState}>
          {diagnosisOptions.map((item, i) => (
            <MenuItem key={i} value={item.id}>
              {item.diagnosisName}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <label>Select A Treatment</label>
        <Select onChange={handleTreatmentChange} value={treatmentState}>
          {treatmentOptions.map((item, i) => (
            <MenuItem key={i} value={item.id}>
              {item.treatmentName}
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
      {requirements.map((item, i) => (
            <li key={i} value={item.id}>{item.requirementDescription} </li>))}
    </div>
    
    <Button onClick={() => props.deleteTreatmentRow(props.rowKey)}>Delete</Button>
    </form>
  );
}

export default TreatmentRow;
