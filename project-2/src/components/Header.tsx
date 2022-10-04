import React from "react";
import "../styles.css"

type Commit = {
    author_name: string
    title: string
    committed_date: string
  }

type HeaderProps ={
    author_name: string
    setAuthorName: React.Dispatch<React.SetStateAction<string>>
    commits : Commit[]
}


export default function Header({author_name, setAuthorName, commits}: HeaderProps){
   
    const authors = commits.map(commit => commit.author_name)
    const uniqeAuthors = authors.filter((item,index) => {
        return authors.indexOf(item) === index
    });

    return(
        <div>
            {author_name === "All" ? 
                <h1 className="projectTitle">PROJECT 2</h1> :
                <h1 className="projectTitle">{author_name}</h1>
            }
            <ul className="headerButtons">
                <button className="allButton" onClick={() => setAuthorName("All")}>Show all commits</button>
                {uniqeAuthors.map((author, index) => 
                    <button className="authorButtons" key={index} onClick={()=> {setAuthorName(author)}}>
                        {author}
                    </button>
                )}
            </ul>
        </div>
    )
}


