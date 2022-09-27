import React, { useEffect, useState } from "react";
import { getIssues } from "../utils/fetch";

interface Props  {
    totalNumberOfIssues: Issues[],
    issuesToday: Issues[],
    theIssuesToday: Issues[]
}

type Member = {
    id: number,
    username: string,
    name: string
}

type Issues = {
    id: number,
    title: string,
    author: Member,
    created_at: string
}

export const current = new Date();
export const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

export const TotalIssues: React.FunctionComponent<Props> = ({totalNumberOfIssues, issuesToday, theIssuesToday}) => {
    return <div>
        <h1>Skal vi se her nå</h1>
        <h3>Antall issues totalt: {totalNumberOfIssues.length}</h3>
        <h3>Antall issues i dag: {issuesToday.filter(i => i.created_at.substring(0, 10)==date).length} </h3>
        <p>Opprettet i dag: {issuesToday.filter(i => i.created_at.substring(0, 10)==date).map(issue => issue.title)}</p>
        <h3>Siste kategori</h3>
    </div>
}

/*
export default function issuesInfo() {

    const [issues, setIssues] = useState<Issues[] | undefined>();

    async function fetchIssues() {
        const newIssues = await getIssues();
        setIssues(newIssues);
    }

    useEffect(() => {
        fetchIssues();
    }, [])

     if (issues === undefined) {
         return (
            <div>
                <p>Laster...</p>
            </div>
         )
     }

     console.log(issues)

    return (
        <div>
            <h1>Stats Graph</h1>
            {
                
                issues.map(issue => <h2>{issue.id}</h2>)
            }
            {}
        </div>
    )
}
*/