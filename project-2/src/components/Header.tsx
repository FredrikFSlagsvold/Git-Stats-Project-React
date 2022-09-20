import { useEffect, useState } from "react";
import { getMembers } from "../utils/fetch";


type Members = {
    access_level: number;
    name: string;
}

export default function Header(){
    const [members, setMembers] = useState<Members[]>([]);  

    const fetchMembers= () => {
        getMembers().then((res)=> setMembers(res))
    }

    useEffect(() => {
        fetchMembers();
    }, [])

    const students = members.filter(member => member.access_level == 40  )

    return(
        <div>
            <h1>GIT Stat</h1>
            {students.map((member, index) => 
                <button key={index}>{member.name}</button>
                )}
        </div>
    )
}