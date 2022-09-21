import axios from "axios";

const URL = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/17434"

const accessToken = "Bearer glpat-ZoJcxHwG6cnKzMSGwFrb"

const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 3000,
    headers: {
        Authorization: accessToken
    }
});

export default axiosInstance;