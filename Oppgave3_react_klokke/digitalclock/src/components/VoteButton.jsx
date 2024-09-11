import { useState } from "react"

export default function VoteButton(){
    const [vote,setVote] = useState(0)

    function handleClick(){
        setVote(vote + 1)
    }

    return(
        <button onClick={handleClick}>
            Voted {vote} times
        </button>
    )
}