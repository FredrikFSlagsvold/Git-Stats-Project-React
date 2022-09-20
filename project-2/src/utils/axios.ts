import axios from 'axios';

const URL = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/"
const id= "17434/"


const acess = "Bearer glpat-2t5FVWJaUJ6uHTjjzWLP"
const other = "Bearer glpat-g2q1s6_nosxofSqqtsgD"


const axiosInstance = axios.create({
    baseURL: URL + id,
    timeout: 3000,
    headers:{
        Authorization: acess
    }
});

export default  axiosInstance