import React, { useEffect, useState } from "react";
import Header from "./Header";
import LoginPage from "./LoginPage";
import StatsPage from "../sections/StatsPage";
import { getCommits } from "../utils/fetch";


type Commit = {
  author_name: string
  title: string
  committed_date: string
}


export default function HomePage(){
    const [authorName, setAuthorName] = useState("All");
    const [commits, setCommits] = useState<Commit[]>([])

    const fetchCommits = () => {
        getCommits().then((res)=> setCommits(res))
    }

    useEffect(()=>{
        fetchCommits();
    }, [])



    return <>
        {sessionStorage.getItem("isLoggedIn") === "true" ? 
          <div>
            <Header setAuthorName={setAuthorName} author_name={authorName} commits={commits}/>
            <StatsPage authorName={authorName} commits={commits}/>
          </div>    
        :
        <LoginPage/>}
    </>
}