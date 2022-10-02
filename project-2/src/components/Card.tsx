type CardProps = {
    authorName: string
    title: string
    committedDate: String
}

export default function Card( {authorName, title, committedDate}: CardProps){
return (
<div className="commitsBox">
    <p className="text-xl"> {title}</p>
    <p>Author: {authorName}</p>
    <p>Commeted at: {committedDate.substring(0,10)}</p>

</div>)
}