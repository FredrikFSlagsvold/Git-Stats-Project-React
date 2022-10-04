import React, { useState } from "react";
import Header from "./Header";
import LoginPage from "./LoginPage";
import StatsPage from "../sections/StatsPage";


export default function HomePage(){
    const [authorName, setAuthorName] = useState("All");

    return <>
        {sessionStorage.getItem("isLoggedIn") === "true" ? 
          <div>
            <Header setAuthorName={setAuthorName} author_name={authorName}/>
            <StatsPage authorName={authorName}/>
          </div>    
        :
        <LoginPage/>}
    </>
}