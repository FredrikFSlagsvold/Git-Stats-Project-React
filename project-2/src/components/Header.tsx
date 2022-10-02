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
            <p className="text-xl">GIT Stat</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={() => setAuthorName("All")}>Show for all</button>
            {uniqeAuthors.map((author, index) => 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" key={index} onClick={()=> {setAuthorName(author)}
                }>{author}</button>
                )}

        </div>
    )
}


