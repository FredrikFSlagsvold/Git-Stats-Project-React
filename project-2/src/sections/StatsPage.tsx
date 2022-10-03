import { useEffect, useState } from "react";
import {getCommits } from "../utils/fetch";
import Card from "../components/Card"
import DoughnutChart from "../components/DoughnutChart";

type Commit = {
    author_name: string
    title: string
    committed_date: String
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
    const AuthorList = Array.from(new Set(commits?.map((commit) => commit.author_name)))

    const barData = []


    for (let i = 0; i < AuthorList.length; i++) {
        barData.push(commits.filter((commit) => commit.author_name === AuthorList[i]).length)
    }


    return(
    <div>
        <div className="bothBoxes">
            <div className="listOfCommits">
                {authorName ==="All" ?
                 commits.map((commit) => <Card authorName={commit.author_name} title={commit.title} committedDate={commit.committed_date}/> ):
                authorName !== "All" && filterCommits.map((commit) => <Card authorName={commit.author_name} title={commit.title} committedDate={commit.committed_date}/> )
                 }
            </div>
            <div className="DoughnutChartBox">
                <DoughnutChart dataList = {barData} authorList = {AuthorList}/>
            </div>
        </div>
    </div>)
}