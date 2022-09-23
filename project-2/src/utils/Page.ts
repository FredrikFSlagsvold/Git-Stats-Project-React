import React, { useState } from "react";
import { getMergeRequests } from './utils/fetch';

type Issue = {
    id: string;
}


export default function Page(){
    const [mergeRequest, setMergeRequest] = useState<Issue[]>([]);

    getMergeRequests()
}