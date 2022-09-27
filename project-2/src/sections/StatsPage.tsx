import { useEffect, useState } from "react";
import {getBranches, getCommits, getIssues } from "../utils/fetch";


type Branch={
    name: string
    commit: Commit
}

type Commit = {
    author_name: string
    title: string
}

type StatsPageProps={
    authorName: string


}

export default function StatsPage({authorName}: StatsPageProps){    
    const [commits, setCommits] = useState<Commit[]>([])

    const fetchCommits = () => {
        getCommits().then((res)=> setCommits(res))
    }

    useEffect(()=>{
        fetchCommits();
    }, [])

    const filterCommits = commits.filter(commit => commit.author_name === authorName)


    return(<>
    {authorName === "All" && 
    <div>
        <div>
            <h3>Commits: {commits.length}</h3>
            {commits.map((data,index)=>{
                return(
                    <li key={index}>{data.title}</li>
                )
            })}
        </div>
        </div>
        }

{authorName !== "All" && <div>        
            <div>
            <h3>Commits: {filterCommits.length}</h3>
            {filterCommits.map((data,index)=>{
                return(
                    <li key={index}>{data.title}</li>
                )
            })}
        </div></div>}

    </>)
}


