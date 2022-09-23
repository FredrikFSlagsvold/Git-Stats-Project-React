import React, { useEffect, useState } from "react";
import {getBranches, getCommits, getIssues } from "../utils/fetch";


type Issues ={
    title: string
}

type Branches={
    name: string
}

type StatsPageProps={
    person: number
}

export default function StatsPage({person}: StatsPageProps){    
    const [issues, setIssues] = useState<Issues[]>([])
    const [commits, setCommits] = useState<Issues[]>([])
    const [branches, setBranches] = useState<Branches[]>([])

    const fetchIssues = () => {
        getIssues().then((res)=> setIssues(res))
    }
    const fetchCommits = () => {
        getCommits().then((res)=> setCommits(res))
    }
    const fetchBranches = () =>{
        getBranches().then((res)=> setBranches(res))
    }

    useEffect(()=>{
        fetchIssues();
        fetchCommits();
        fetchBranches();
    }, [])

    
    return(<>
        <div className="stats">
            <h3>Issues created: {issues.length}</h3>
            {issues.map((data,index)=> {
                return(
                    <li key={index}>{data.title}</li>
                )
            })}
        </div>

        <div>
            <h3>Commits: {commits.length}</h3>
            {commits.map((data,index)=>{
                return(
                    <li key={index}>{data.title}</li>
                )
            })}
        </div>

        <div>
            <h3>Branches: {branches.length}</h3>
            {branches.map((data,index)=>{
                return(
                    <li key={index}>{data.name}</li>
                )
            })}
        </div>
    </>)
}


