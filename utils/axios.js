import axios from "axios";

// http://localhost:5000
//https://jellyfish-app-br4i7.ondigitalocean.app/

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
});

export default axiosInstance;
