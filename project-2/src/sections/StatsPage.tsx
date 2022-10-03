import { useEffect, useState } from "react";
<<<<<<< HEAD
import {getCommits } from "../utils/fetch";
import Card from "../components/Card"
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";
=======
import BarChart from "../components/BarChart";
import { getCommits } from "../utils/fetch";



>>>>>>> 8baaf7ca51421e3fd0909be52a230cfd4dd135a6

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

    const AuthorList = Array.from(new Set(commits?.map((commit) => commit.author_name)))
    const dateList = Array.from(new Set(commits?.map((commit) => commit.committed_date.substring(0,10))))

<<<<<<< HEAD
=======
    //Commits per bruker
    const barData = []
>>>>>>> 8baaf7ca51421e3fd0909be52a230cfd4dd135a6

    const barData = []

    for (let i = 0; i < AuthorList.length; i++) {
        barData.push(commits.filter((commit) => commit.author_name === AuthorList[i]).length)
    }

    const lineData = []

    for (let i = 0; i < dateList.length; i++) {
        lineData.push(commits.filter((commit) => (commit.committed_date.substring(0,10) === dateList[i] && commit.author_name=== authorName)).length)
    }


<<<<<<< HEAD
    return(
    <div>
        <div className="bothBoxes">
            <div className="listOfCommits">
                {authorName ==="All" ?
                 commits.map((commit,index) => <Card key={index} authorName={commit.author_name} title={commit.title} committedDate={commit.committed_date}/> ):
                authorName !== "All" && filterCommits.map((commit,index) => <Card key={index} authorName={commit.author_name} title={commit.title} committedDate={commit.committed_date}/> )
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
=======

    return(<div>
    {authorName === "All" && 
    <div className="flex flex-row p-16 text-left">
        <div className="px-8">
            <h1 >Commits: {commits.length}</h1>
            {commits.map((data,index)=>{
                return(
                    <li className="mt-4" key={index}>{data.title}</li>
                )
            })}
>>>>>>> 8baaf7ca51421e3fd0909be52a230cfd4dd135a6
        </div>
        </div>
        }

{authorName !== "All" && <div className="flex flex-row p-16 text-left">        
            <div className="px-8">
            <h1>Commits: {filterCommits.length}</h1>
            {filterCommits.map((data,index)=>{
                return(
                    <li className="mt-4" key={index}>{data.title}</li>
                )
            })}
        </div>
        </div>}

        <BarChart dataList = {barData} authorList = {AuthorList}/>
    </div>)
}


