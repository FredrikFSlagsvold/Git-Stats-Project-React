import axiosInstance from "./axios"

export async function getMergeRequests() {
    const mergeRequests = await axiosInstance.get("merge_requests");
    return mergeRequests.data;
}

export async function getIssues(){
    const issues = await axiosInstance.get("issues");
    return issues.data;
}

export async  function getCommits() {
    const commits = await axiosInstance.get("repository/commits")
    return commits.data;
}