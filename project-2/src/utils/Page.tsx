import React, { useState, useEffect } from "react";
import { getMergeRequests } from '../utils/fetch';

type MergeRequest = {
    id: string,
    title: string,
    description: string
}


export default function Page() {
    const [mergeRequests, setMergeRequests] = useState<MergeRequest[]>([]);

    const fetchMergeRequests = () => getMergeRequests().then(response => { setMergeRequests(response) })

    useEffect(() => {
        fetchMergeRequests();
    }, [])

    return( 
        <div>
        <h1> {mergeRequests.map((mergeRequest, index) => { 
            return(
                <h3 key = {index}>{mergeRequest.description}</h3>
                )
        })}
        </h1> 
    </div>
    )
}