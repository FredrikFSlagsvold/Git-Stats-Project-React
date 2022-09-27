import { useEffect, useState } from "react";
import { getMembers, getCommits } from "../utils/fetch";


type Members = {
    setPersonID: React.Dispatch<React.SetStateAction<number>>
    setUsername: React.Dispatch<React.SetStateAction<string>>
    setName: React.Dispatch<React.SetStateAction<string>>
    id: number
    username: string; 
    name?: string;
    access_level?: number;
}

type Branch = {
    name: string
    commit: Commit
}

type Commit ={
    title: string
    author_name: string
    setAuthorName: React.Dispatch<React.SetStateAction<string>>
}

type Author = {
    name: string
}


export default function Header({author_name, setAuthorName}: Commit){
    const [commits, setCommits] = useState<Commit[]>([]); 
    const fetchCommits= () => {
        getCommits().then((res)=> setCommits(res))
    }

    useEffect(() => {
        fetchCommits();
    }, [])


    const authors = commits.map(commit => commit.author_name)
    const uniqeAuthors = authors.filter((item,index) => {
        return authors.indexOf(item) === index
    });

    return(
        <div>
            <h1>GIT Stat</h1>
            <button onClick={() => setAuthorName("All")}>Show for all</button>
            {uniqeAuthors.map((author, index) => 
                <button key={index} onClick={()=> {setAuthorName(author)}
                }>{author}</button>
                )}

        </div>
    )
}


