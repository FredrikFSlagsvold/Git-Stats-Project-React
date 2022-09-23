import { useEffect, useState } from "react";
import { getMembers } from "../utils/fetch";


type Members = {
    setPersonID: React.Dispatch<React.SetStateAction<number>>
    id: number
    name?: string;
    access_level?: number;
}


export default function Header({name, setPersonID}: Members){
    const [members, setMembers] = useState<Members[]>([]); 
    const fetchMembers= () => {
        getMembers().then((res)=> setMembers(res))
    }

    useEffect(() => {
        fetchMembers();
    }, [])

    const students = members.filter(member => member.access_level == 40 )

    return(
        <div>
            <h1>GIT Stat</h1>
            {students.map((member, index) => 
                <button key={index} onClick={()=> setPersonID(member.id)
                }>{member.name}</button>
                )}
        </div>
    )
}