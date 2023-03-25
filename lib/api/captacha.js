import axios from "axios";

const validateCaptchaToken = async (token) => {
    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_CAPTCHA_SECRET}&response=${token}`
        );
        console.log(response)
        return response;
    } catch (err) {
        return err;
    }
};

export { validateCaptchaToken };
