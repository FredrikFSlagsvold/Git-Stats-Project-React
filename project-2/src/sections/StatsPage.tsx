import React, { useEffect, useState } from "react";
import {getBranches, getCommits, getIssues } from "../utils/fetch";


type Issues ={
    title: string
    
}

type Branches={
    name: string
}


export default function StatsPage(){    
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

    
    return(<div className="flex flex-row p-16 text-left">
        <div className="px-8">

            <h1>Issues created: {issues.length}</h1>
            {issues.map((data,index)=> {
                return(
                    <li className="mt-4" key={index}>{data.title}</li>
                )
            })}
        </div>

        <div className="px-8">
            <h1>Commits: {commits.length}</h1>
            {commits.map((data,index)=>{
                return(
                    <li className="mt-4" key={index}>{data.title}</li>
                )
            })}
        </div>

        <div className="px-8">
            <h1>Branches: {branches.length}</h1>
            {branches.map((data,index)=>{
                return(
                    <li className="mt-4" key={index}>{data.name}</li>
                )
            })}
        </div>


    </div>)
}


