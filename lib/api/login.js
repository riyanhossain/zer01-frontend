import axios from "../../utils/axios";

const login = async (data) => {
    try {
        const response = await axios.post("/api/v1/auth/login", data);
        return response;
    } catch (err) {
        return err;
    }
};

// named export
export { login };
