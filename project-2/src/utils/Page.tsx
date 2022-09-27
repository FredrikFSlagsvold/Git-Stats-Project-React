import { useState, useEffect } from "react";
import { getMergeRequests, getIssues} from '../utils/fetch';
import BarChart from "./BarChart";
import DoughnutChart from "./Doughnut";

type MergeRequest = {
    id: string,
    title: string,
    description: string
}

type Issues = {
    title: string
}



export default function Page() {
    const [mergeRequests, setMergeRequests] = useState<MergeRequest[]>([]);
    const [issues, setIssues] = useState<Issues[]>([]);

    const fetchMergeRequests = () => getMergeRequests().then(response => { setMergeRequests(response) })
    const fetchIssues = () => getIssues().then(issue => { setIssues(issue) })

    useEffect(() => {
        fetchMergeRequests();
        fetchIssues();
    }, [])

    return( 
        <div>
            {/* <h1>Merge requests: {mergeRequests.length}</h1>
            <p> {mergeRequests.map((mergeRequest, index) => { 
                return(
                    <h3 key = {index}>{mergeRequest.description}</h3>
                    )
            })}
            </p>

            <h1>Issues: {issues.length}</h1>
            <p> {issues.map((issue, index) => {
                return (
                    <h3 key = {index}>{issue.title}</h3>
                )
                })}
            </p> */}
            {/* <CommitsInfo/> */}
            <BarChart/>
            <DoughnutChart/>
            
          

{/* Måte å filtrere commits på: <br></br>
            Fredrik: <br></br> {commits.filter((commit => commit.author_name.includes('Fredrik'))).map(filtered => (
            <li key = {filtered.id}>
                {filtered.title}
            </li>
        ))} */}

        </div>
    )
}
