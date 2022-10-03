import axios from 'axios';

const URL = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/"

const acess = "Bearer "

const axiosInstance = axios.create(
    {
    baseURL: URL + localStorage.getItem("id"),
    timeout: 3000,
    headers:{
        Authorization: acess + localStorage.getItem("token")
    }
});

export default  axiosInstance

