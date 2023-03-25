import axios from "@/utils/axios";

const sendContactMail = async ({ data, token }) => {
    try {
        const response = await axios.post("/api/v1/contacts", {
            data,
            token,
        });
        return response;
    } catch (err) {
        return err;
    }
};

export { sendContactMail };
