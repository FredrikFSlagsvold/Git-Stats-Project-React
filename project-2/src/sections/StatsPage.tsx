import { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import { getCommits } from "../utils/fetch";




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

    //Commits per bruker
    const barData = []


    for (let i = 0; i < AuthorList.length; i++) {
        barData.push(commits.filter((commit) => commit.author_name === AuthorList[i]).length)
    }



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
        </div></div>}

        <BarChart dataList = {barData} authorList = {AuthorList}/>
    </div>)
}


