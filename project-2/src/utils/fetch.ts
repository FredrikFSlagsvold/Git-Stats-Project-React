import { axiosInstance } from "/Users/fredrikfs/Documents/NTNU/Ingeniørvitenskap og IKT/3. Klasse/Webutvikling/Prosjekt 2/project-2/src/utils/axios"

export async function getMergeRequests() {
    const mergeRequests = await axiosInstance.get("/merge_requests");
    return mergeRequests.data;
}