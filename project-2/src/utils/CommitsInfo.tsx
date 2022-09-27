import { wrap } from "module";
import {useState, useEffect } from "react"
import { getCommits } from '../utils/fetch';



type Commit = {
    id: string,
    title: string
    author_name: string
    committed_date: string
}


export default function CommitsInfo() {
    const [commits, setCommits] = useState<Commit[]>([]);

    const fetchCommits = () => getCommits().then(commit => {setCommits(commit)})

    useEffect(() => {
        fetchCommits();
    }, [])

    return (
        <div>
            <h1> Commits data</h1>
            <h3 > Commit Title: <ul>{commits.map((commit) => { return <li>{commit.title}</li>})}</ul></h3>
            <h3 style={{textAlign: 'center'}}> Commit Author: <ul style={{padding: 0, display: "flex", flexWrap: 'wrap'}}>{commits.map((commit) => { return <li style={{flex: '0 0 50%', listStyleType: 'none', textAlign: 'center'}}>{commit.author_name}</li>})}</ul></h3>

            Fredrik: {commits.filter((commit) => commit.author_name.includes('Fredrik')).length}

        </div>
    )
}
