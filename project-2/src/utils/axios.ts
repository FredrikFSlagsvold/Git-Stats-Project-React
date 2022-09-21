import axios from "axios";

const URL = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/17434"
const accessToken = "Bearer glpat-ZoJcxHwG6cnKzMSGwFrb"

const acess = "Bearer glpat-2t5FVWJaUJ6uHTjjzWLP"
const other = "Bearer glpat-g2q1s6_nosxofSqqtsgD"

const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 3000,
    headers:{
        Authorization: acess

    }
});

export default  axiosInstance