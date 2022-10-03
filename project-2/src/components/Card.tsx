import React from "react";

type CardProps = {
    authorName: string;
    title: string;
    comittedDate: string;
}

export default function Card({authorName,title,comittedDate}: CardProps){
    return( 
    <div className="commitsBox">
        <p className="text-xl">{title}</p>
        <p>Author: {authorName}</p>
        <p>Comitted at: {comittedDate.substring(0,10)}</p>


    </div>)
}