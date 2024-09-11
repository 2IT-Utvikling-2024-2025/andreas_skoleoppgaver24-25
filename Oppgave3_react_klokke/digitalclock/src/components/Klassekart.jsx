import { useState } from 'react'
import "./Klassekart.json"



export default function Klassekart() {    
const [Person, setPerson] = useState([
    { Name: "Andreas", LastName: "Ski", clicked: 0, id: 1 },
    { Name: "Nahuel", LastName: "Polesel", clicked: 0, id: 2 },
])
    //JSON.stringify('Klassekart.json')

    function Signal(index){
        
        const element = Person[index];

        element.clicked += 1;

        setPerson([...Person])
    


    }

    
    const listitems = Person.map((hobby, index) => (
        <li key={hobby.id}>
        <button className='button'onClick={() => Signal(index)}>
            {hobby.Name}
            {hobby.clicked}
        </button>
    </li>
    ))


    return(
        <>
            <h1>Klassekart</h1>

            <ul>{listitems}</ul>

        </>
    )
    
}


