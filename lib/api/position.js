import axios from "@/utils/axios";
const createPosition = async (data) => {
    try {
        const response = await axios.post("/api/v1/positions/create", data);
        return response;
    } catch (err) {
        return err;
    }
};

const getAllPositions = async ({ page = 1, limit = 9, search ="" }) => {
    try {
        const response = await axios.get(`/api/v1/positions/positions?page=${page}&limit=${limit}&search=${search}`);
        return response;
    } catch (err) {
        return err;
    }
};

const getPositionsByActiveOrClosedStatus = async ({ status, search }) => {
    try {
        const response = await axios.get(`/api/v1/positions/active-closed?status=${status}&search=${search}`);
        return response;
    } catch (err) {
        return err;
    }
};

const getPositionsByInactiveStatus = async ({ search }) => {
    try {
        const response = await axios.get(`/api/v1/positions/inactive?search=${search}`);
        return response;
    } catch (err) {
        return err;
    }
};

const getPositionsByOrderStatus = async ({ search }) => {
    try {
        const response = await axios.get(`/api/v1/positions/order?search=${search}`);
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

const changePositionStatus = async ({ positionId, status }) => {
    try {
        const response = await axios.patch(`/api/v1/positions/positions/${positionId}`, { status });
        return response;
    } catch (err) {
        return err;
    }
};

const getSinglePositionById = async (positionId) => {
    try {
        const response = await axios.get(`/api/v1/positions/positions/${positionId}`);
        return response;
    } catch (err) {
        return err;
    }
};

const editPosition = async ({ positionId, data }) => {
    try {
        const response = await axios.patch(`/api/v1/positions/positions/edit/${positionId}`, data);
        return response;
    } catch (err) {
        return err;
    }
};

// named export
export {
    createPosition,
    getAllPositions,
    getPositionsByActiveOrClosedStatus,
    deletePosition,
    changePositionStatus,
    getSinglePositionById,
    editPosition,
    getPositionsByInactiveStatus,
    getPositionsByOrderStatus,
};
