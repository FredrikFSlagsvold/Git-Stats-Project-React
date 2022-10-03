import { useEffect, useState } from "react";
import {getCommits } from "../utils/fetch";
import Card from "../components/Card"
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";

type Commit = {
    author_name: string
    title: string
    committed_date: string
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
    const dateList = Array.from(new Set(commits?.map((commit) => commit.committed_date.substring(0,10))))


    const barData = []

    for (let i = 0; i < AuthorList.length; i++) {
        barData.push(commits.filter((commit) => commit.author_name === AuthorList[i]).length)
    }

    const lineData = []

    for (let i = 0; i < dateList.length; i++) {
        lineData.push(commits.filter((commit) => (commit.committed_date.substring(0,10) === dateList[i] && commit.author_name=== authorName)).length)
    }


    return(
    <div>
        <div className="bothBoxes">
            <div className="listOfCommits">
                {authorName ==="All" ?
                 commits.map((commit,index) => <Card key={index} authorName={commit.author_name} title={commit.title} comittedDate={commit.committed_date}/> ):
                authorName !== "All" && filterCommits.map((commit,index) => <Card key={index} authorName={commit.author_name} title={commit.title} comittedDate={commit.committed_date}/> )
                 }
            </div>
            {authorName === "All" &&
            <div className="DoughnutChartBox">
                <DoughnutChart dataList = {barData} authorList = {AuthorList}/>
            </div>
            }
            {authorName !== "All" &&
             <div className="DoughnutChartBox">
             <LineChart dataList = {lineData} authorList = {dateList}/>
            </div>
            }
        </div>
        </div>
    )

}


