import './MyHobbies.css'
import { useState } from 'react'

const hobbies = [
    { title: "Gaming", isFavorite: true, upVote: 0, id: 1 },
    { title: "Spilutvikling", isFavorite: false, upVote: 0, id: 2 },
    { title: "Fysikk", isFavorite: false, upVote: 0, id: 3 },
]



export default function MyHobbies() {

    const listitems = hobbies.map(hobby =>
        <li key={hobby.id} style={{color: hobby.isFavorite ? "magenta" : "yellow"}}>
            {hobby.title}
            <VoteButton></VoteButton>
        </li>
    )

    return (
        <>
            <h1 className='header'>Andreas Ski</h1>
            <ul>{listitems}</ul>

        </>
    )
}


function VoteButton(){

    const[vote, setVote] = useState(0)

    function handleClick(){
        setVote(vote + 1)
    }
    return(
        <button className='button' onClick={handleClick}>
            Voted {vote} times
        </button>
    )
}