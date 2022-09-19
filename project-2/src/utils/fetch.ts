import axiosInstance from "./axios";


//all members in the projects, 
export async function getProfile () {
    const profile = await axiosInstance.get("members/all/")
    return profile.data
}

//brnaches in the project, funker ikke?
export async function getBranches() {
    const branches = await axiosInstance.get("repository/branches/")
    console.log("branchen kjører")
}

//issues in the project
export async function getIssues(){
    const issues = await axiosInstance.get("issues")
    return issues.data
}