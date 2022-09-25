import React, { useState, useEffect } from "react";
import { getMergeRequests, getIssues, getCommits } from '../utils/fetch';

type MergeRequest = {
    id: string,
    title: string,
    description: string
}

type Issues = {
    title: string
}

type Commits = {
    title: string,
    author_name: string,
    committed_date: string
}


export default function Page() {
    const [mergeRequests, setMergeRequests] = useState<MergeRequest[]>([]);
    const [issues, setIssues] = useState<Issues[]>([]);
    const [commits, setCommits] = useState<Commits[]>([]);

    const fetchMergeRequests = () => getMergeRequests().then(response => { setMergeRequests(response) })
    const fetchIssues = () => getIssues().then(issue => { setIssues(issue) })
    const fetchCommits = () => getCommits().then(commit => {setCommits(commit)})

    useEffect(() => {
        fetchMergeRequests();
        fetchIssues();
        fetchCommits();
    }, [])

    return( 
        <div>
            <h1>Merge requests: {mergeRequests.length}</h1>
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
            </p>
            <h1>Commits: {commits.length} </h1>
            <p>{commits.map((commit) => {
                return (
                <p>{commit.author_name}: {commit.title} created: {commit.committed_date.substring(0,10)}</p>)
            })} 
            </p>
            
{/* Måte å filtrere commits på:
            Fredrik: {commits.filter((commit => commit.author_name.includes('Fredrik'))).map(filtered => (
            <li>
                {filtered.title}
            </li>
        ))} */}

        </div>
    )
}
