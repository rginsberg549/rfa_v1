import axios from "axios";

const getRequirements =(diagnosis, treatments) => {
    if (!diagnosis || !treatments) {
        return []

    } else {
        return ["Requirement 1", "Requirement 2", "Requirement 3", "Requirement 4"];
    } 
};

export default getRequirements;