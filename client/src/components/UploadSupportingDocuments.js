import React, { useState, useContext } from "react";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import FileRow from "../components/FileRow";
import FormContext from "../utils/FormContext";


function UploadSupportingDocuments() {
  let history = useHistory();

  const [fileRowState, setAllFileRows] = useState([{id: 0}]);

  const { updateSupportingDocuments } = useContext(FormContext);

  function updateFileRow(fileNew) {
    const arr = fileRowState.map(elem => {
      
      if (elem.id === fileNew.id) {
        return {
          ...elem,
          ...fileNew
        }
      } else {
        return elem
      }
    })
    setAllFileRows(arr);
  }

  const handleNextClick = (event)=> {
    event.preventDefault();
    updateSupportingDocuments(fileRowState);
    history.push("/view-request");
  }

  const handleBackClick = (event)=> {
    event.preventDefault();
    history.goBack();
  }

  
  const renderTreatmentRow = () => {
    const newFileRow = [...fileRowState, 
      {
        id: fileRowState.length,
      }]
    setAllFileRows(newFileRow);
  }
  const deleteFileRow = (id) => {
    const arr = fileRowState.filter(elem => elem.id !== id)
    setAllFileRows(arr)
  }


  return (
    <div>
      {fileRowState.map((item,i) => <FileRow 
      key={i}
      rowKey={i}
      row={item}
      index={i} 
      updateFileRow={updateFileRow}
      deleteFileRow={deleteFileRow}> </FileRow>)}
      <Button onClick={renderTreatmentRow}>Add Another File</Button>
      <Button onClick={handleBackClick} type="submit" value="back">Back</Button>
      <Button onClick={handleNextClick} type="submit" value="next">Next</Button>
    </div> 
  )
}

export default UploadSupportingDocuments;