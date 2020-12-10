import axios from "axios";

const getDiagnosis =() => {
    return axios.get("/api/getDiagnoses");
};

export default getDiagnosis;
