import axiosInstance from "./axios";

//IS USED
//issues in the project
export async function getIssues(){
    const issues = await axiosInstance.get("issues")
    return issues.data
}


//commits in the project
export async function getCommits(){
    const commits = await axiosInstance.get("repository/commits")
    return commits.data
}

//TEST
//all members in the projects, 
export async function getProfile () {
    const profile = await axiosInstance.get("members")
    return profile.data
}

//brnaches in the project, funker ikke?
export async function getBranches() {
    const branches = await axiosInstance.get("repository/branches")
    return branches.data
}


