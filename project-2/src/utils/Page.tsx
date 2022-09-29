import { useState, useEffect } from "react";
import { getMergeRequests, getIssues, getCommits} from '../utils/fetch';
import BarChart from "./BarChart";



type Commit = {
    id: string,
    title: string
    author_name: string
    committed_date: string
}


type MergeRequest = {
    id: string,
    title: string,
    description: string
}

type Issues = {
    title: string
    author: Author
}

type Author = {
    id: string,
    name: string
}






export default function Page() {
    const [currentAuthor, setCurrentAuthor] = useState<string>("");
    const [mergeRequests, setMergeRequests] = useState<MergeRequest[]>([]);
    const [issues, setIssues] = useState<Issues[]>([]);
    const [commits, setCommits] = useState<Commit[]>([]);

    const fetchCommits = () => getCommits().then(commit => {setCommits(commit)})
    const fetchMergeRequests = () => getMergeRequests().then(response => { setMergeRequests(response) })
    const fetchIssues = () => getIssues().then(issue => { setIssues(issue) })

    // const Authors = Array.from(new Set(issues?.map(issue => issue.author_name)))

    useEffect(() => {
        fetchMergeRequests();
        fetchIssues();
        fetchCommits();
    }, [])

    const AuthorList = Array.from(new Set(issues?.map((issue) => issue.author.name)))
    const filteredCommits = commits.filter((commit) => commit.author_name.includes(currentAuthor))
    
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


            <ul style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', listStyle: 'none'}}>
                {AuthorList.map((author) => { return (
                <li style={{height: '40px', backgroundColor: 'red',cursor: 'pointer'}} onClick= {() => setCurrentAuthor(author)}>
                    {author}
                </li>
                )})}
            </ul>

            <ul style={{display:'flex', justifyContent: 'space-between', flexWrap: 'wrap', listStyle: 'none'}}>{filteredCommits.map((commit) => { return (
                <li style={{height: '100px', width: '200px', backgroundColor: 'grey', margin: '15px'}}>
                    {commit.title}</li>
            )})}
            </ul>
            <BarChart/>
            {/* <DoughnutChart/> */}

        </div>
    )
}
