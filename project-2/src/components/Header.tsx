import { useEffect, useState } from "react";
import { getCommits } from "../utils/fetch";


type Commit ={
    title: string
    author_name: string
    setAuthorName: React.Dispatch<React.SetStateAction<string>>
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
            <h1 className="projectTitle">PROJECT 2</h1>
            <ul className="headerButtons">
                <button className="authorButtons" onClick={() => setAuthorName("All")}>Show for all</button>
                {uniqeAuthors.map((author, index) => 
                <button className="authorButtons" key={index} onClick={()=> {setAuthorName(author)}
                }>{author}</button>
                )}
            </ul>
        </div>
    )
}


