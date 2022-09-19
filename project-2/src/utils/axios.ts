import axios from 'axios';

const URL = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/17434/"

const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 3000,
    headers:{
        Authorization:'Bearer glpat-g2q1s6_nosxofSqqtsgD'
    }
});

export default  axiosInstance