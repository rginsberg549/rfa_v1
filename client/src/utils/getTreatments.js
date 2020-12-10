import axios from "axios";

const getTreatments= () => {
    return axios.get("/api/getTreatments/");
};

export default getTreatments;