import axios from 'axios';

const URL = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/17434/"
const access = "Bearer glpat-2t5FVWJaUJ6uHTjjzWLP"

const other = "Bearer glpat-g2q1s6_nosxofSqqtsgD"

const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 3000,
    headers:{
        Authorization: access

    }
});

export default  axiosInstance