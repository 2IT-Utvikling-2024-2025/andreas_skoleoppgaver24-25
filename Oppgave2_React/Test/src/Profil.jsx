import './Profil.css'
import { useState } from 'react'
import logo from '/ProfilePicture_empty.webp'




const ferdigheter = [
    { title: "Coding", isFavorite: true, upVote: 0, id: 1 },
    { title: "Writing", isFavorite: false, upVote: 0, id: 2 },
    { title: "Painting", isFavorite: false, upVote: 0, id: 3 },
]

export default function Profil() {

    const listitems = ferdigheter.map(hobby =>
        <li key={hobby.id} style={{color: hobby.isFavorite ? "magenta" : "yellow"}}>
            {hobby.title}
            <VoteButton></VoteButton>
        </li>
    )

    return(
        <>
            <img src={logo} alt="Empty profile picture"></img>
            <h1 className='header'>Andreas Ski</h1>
            <p className='about'>I'm an IT student at Drømtorp Videregående Skole in Norway and I'm currently learning HTML, CSS, JavaScript and Git. 
                I have a passion for gaming, programming (web and game development), art (mostly painting), physics and astronomy.
                
                <br /><br />
                I also have some abilities such as Coding, Writing and Painting.
                <br />
                Here can you vote on my abilities (my personal favorite is displayed in magenta):
            </p>
            <ul>{listitems}</ul>
        </>
    )
}

function VoteButton(){

    const[vote, setVote] = useState(0)

    function handleClick(){
        setVote(vote + 1)
        if (vote > 9) {
            alert("You can only vote 10 times")
            setVote(10)
        }
    }
    return(
        <button className='button' onClick={handleClick}>
            Voted {vote} times
        </button>
    )
}