import axios from "../../utils/axios";
const createPosition = async (data) => {
    try {
        const response = await axios.post("/api/v1/positions/create", data);
        return response;
    } catch (err) {
        return err;
    }
};

// named export
export { createPosition };
