import React, { useEffect, useState } from "react";
import { getBranches, getIssues, getProfile } from "../utils/fetch";

type User ={
    name: string
}

type Branches= {
    name: string
}

type Issues ={
    title: string
    
}

export default function StatsPage(){    
    const [users, setUsers] = useState<User[]>([])
    const [Issues, setIssues] = useState<Issues[]>([])
    const [branches, setBranches] = useState<Branches[]>([])

    const fetchUsers = ()=>{
        getProfile().then((res)=> setUsers(res))
    }

    // const fetchBranches = ()=>{
    //     getBranches().then()
    // }

    const fetchIssues = () => {
        getIssues().then((res)=> setIssues(res))
    }

    useEffect(()=>{
        fetchUsers();
        // fetchBranches();
        fetchIssues();
    }, [])




    return(<>
    {/* <div>
    {users.map((user,index)=> {
        return<p key={index}>{user.name}</p>
        })}

    </div> */}
    <div>
        {Issues.map((issues,index)=> {
            return(<p key={index}>{issues.title}</p>)
        })}
    </div>

    </>)
}


