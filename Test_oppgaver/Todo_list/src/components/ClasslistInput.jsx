import {useState} from 'react'
import jsonListe from "./Section.json"

export default function ClasslistInput(){
    const [inputName, setInputName] = useState("")
    const [inputAge, setInputAge] = useState(0)


    function submit(){
        event.preventDefault();

        console.log(inputName,inputAge)
    }

    return(
        <div>
            <p>Student Input:</p>

            <form onSubmit={submit} className='Form'>

            <input type="text" id='classListInput1'
            placeholder='name'
            value={inputName}
            onChange={(i) => setInputName(i.target.value)}
            />
            
            <input type="number" id='classListInput2'
            placeholder='age'
            value={inputAge}
            onChange={(i) => setInputAge(i.target.value)}
            />
            
            <input type="submit"/>

            </form>
        </div>
    )
}