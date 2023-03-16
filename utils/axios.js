import axios from "axios";

// http://localhost:5000
//https://jellyfish-app-br4i7.ondigitalocean.app/

const axiosInstance = axios.create({
    baseURL: "//https://jellyfish-app-br4i7.ondigitalocean.app",
});

export default axiosInstance;
