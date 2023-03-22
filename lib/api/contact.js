import axios from "@/utils/axios";

const sendContactMail = async (data) => {
    try {
        const response = await axios.post("/api/v1/contacts", data);
        return response;
    } catch (err) {
        return err;
    }
};

export { sendContactMail };
