import axios from "axios";

const URL = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/17434"
const accessToken = "Bearer glpat-ZoJcxHwG6cnKzMSGwFrb"

export default axios.create({
    baseURL: URL,
    timeout: 3000,
    headers: {
        

    }
})
