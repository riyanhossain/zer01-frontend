import axios from "../../utils/axios";
const createPosition = async (data) => {
    try {
        const response = await axios.post("/api/v1/positions/create", data);
        return response;
    } catch (err) {
        return err;
    }
};

const getAllPositions = async ({ page = 1, limit = 9 }) => {
    try {
        const response = await axios.get(`/api/v1/positions/positions?page=${page}&limit=${limit}`);
        return response;
    } catch (err) {
        return err;
    }
};

const getPositionsByActiveOrClosedStatus = async (status) => {
    try {
        const response = await axios.get(`/api/v1/positions/active-closed?status=${status}`);
        return response;
    } catch (err) {
        return err;
    }
};

// delete position
const deletePosition = async (positionId) => {
    try {
        const response = await axios.delete(`/api/v1/positions/positions/${positionId}`);
        return response;
    } catch (err) {
        return err;
    }
};

// named export
export { createPosition, getAllPositions, getPositionsByActiveOrClosedStatus, deletePosition };
