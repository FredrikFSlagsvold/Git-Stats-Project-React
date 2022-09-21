import { axiosInstance } from "./axios"

export async function getMergeRequests() {
    const mergeRequests = await axiosInstance.get("/merge_requests");
    return mergeRequests.data;
}