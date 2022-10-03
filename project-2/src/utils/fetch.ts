import axiosInstance from "./axios";


//IS USED
//issues in the project
export async function getIssues(){
    const issues = await axiosInstance.get("issues")
    return issues.data
}

//commits in the project
export async function getCommits(){
    const commits = await axiosInstance.get("repository/commits?per_page=100")
    return commits.data
}

//members
export async function getMembers(){
    const members = await axiosInstance.get("members/all")
    return members.data
}

//brnaches in the project
export async function getBranches() {
    const branches = await axiosInstance.get("repository/branches")
    return branches.data
}