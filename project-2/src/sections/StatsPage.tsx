import React, { useEffect, useState } from "react";
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
    authorName: string,
    commits: Commit[]
}

export default function StatsPage({authorName, commits}: StatsPageProps){
    
    const filterCommits = commits.filter(commit => commit.author_name === authorName)
    const authorList = Array.from(new Set(commits?.map((commit) => commit.author_name)))
    const dateList = Array.from(new Set(commits?.map((commit) => commit.committed_date.substring(0,10)))).reverse()


    const barData = []
    for (let i = 0; i < authorList.length; i++) {
        barData.push(commits.filter((commit) => commit.author_name === authorList[i]).length)
    }

    const lineData = []
    for (let i = 0; i < dateList.length; i++) {
        lineData.push(commits.filter((commit) => (commit.committed_date.substring(0,10) === dateList[i] && commit.author_name=== authorName)).length)
    }


    return(
  
        <div className="bothBoxes">
            <div className="listOfCommits">
                {authorName ==="All" ?
                 commits.map((commit,index) => <Card key={index} authorName={commit.author_name} title={commit.title} comittedDate={commit.committed_date}/> ):
                authorName !== "All" && filterCommits.map((commit,index) => <Card key={index} authorName={commit.author_name} title={commit.title} comittedDate={commit.committed_date}/> )
                 }
            </div>
            {authorName === "All" &&
            <div className="DoughnutChartBox">
                <DoughnutChart dataList = {barData} authorList = {authorList}/>
            </div>
            }
            {authorName !== "All" &&
             <div className="DoughnutChartBox">
             <LineChart dataList = {lineData} authorList = {dateList}/>
            </div>
            }
        </div>
      
    )

}


