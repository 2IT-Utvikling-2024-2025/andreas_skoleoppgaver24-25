import { useState } from "react"

export default function Vokal() {

    const [text , setText] = useState("")
    const [output, setOutput] = useState("")


    
    let vowels = 
    ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    

    function Submit(input) {
        let outputverdi = input.charAt(0)

        if (vowels.includes(outputverdi)) {
            setOutput("Dette starter på vokalen " + outputverdi)
        } else if (input == "") {
            setOutput("Skriv inn et tegn")
        } else {
            setOutput("Dette starter på konsonanten " + outputverdi)
        }
    }

    const Submit2 = (event) => {
        event.preventDefault();
        Submit(event.target.value)
        setText(event.target.value)
    }
    

    return(
        <>
            <h1>Vokal</h1>

            
            <input type="text" 
            value={text}
            /* onChange={(i) => setText(i.target.value)} */
            onChange={Submit2}
            />
            
            <p>{output}</p>
        
        </>
    )
}