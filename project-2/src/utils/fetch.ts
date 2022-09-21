import { axiosInstance } from 'src/utils/axios.ts'

async function getMergeRequests() {
    const mergeRequests = await axiosInstance.get("/merge_requests");
    return mergeRequests;
    
}