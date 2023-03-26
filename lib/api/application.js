import axios from "@/utils/axios";

const sendApplicationMail = async (data) => {
    try {
        const response = await axios.post("/api/v1/application", data);
        return response;
    } catch (error) {
        throw error;
    }
};

export { sendApplicationMail };
