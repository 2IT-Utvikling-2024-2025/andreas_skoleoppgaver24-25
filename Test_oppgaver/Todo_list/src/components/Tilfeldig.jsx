import { useState } from 'react'


export default function Tilfeldig() {

    function nyttTall(){
        setRandom1(Math.floor(Math.random() * 10)+1);
        setRandom2(Math.floor(Math.random() * 10)+1);
    }

    const [random1, setRandom1] = useState(Math.floor(Math.random() * 10)+1);
    const [random2, setRandom2] = useState(Math.floor(Math.random() * 10)+1);
    const [sum, setSum] = useState("");
    const [sumCheck, setSumCheck] = useState("");
    const [merEllerMindreEnn10, setMerEllerMindreEnn10] = useState("");

    const [number1Check, setNumber1Check] = useState("");
    const [number2Check, setNumber2Check] = useState("");


    function Submit(event) {

        let number1 = checkIfPartall(random1)
        let number2 = checkIfPartall(random2)

        if (number1 === true) {
            setNumber1Check("partall")
        }else {
            setNumber1Check("oddetall")
        }

        if (number2 === true) {
            setNumber2Check("partall")
        }else {
            setNumber2Check("oddetall")
        }
        
    }

    function checkIfPartall(inputVerdi) {
        if (inputVerdi % 2 === 0) {
            return true
        } else {
            return false
        }
    }

    function summering(){
        let summering = random1 + random2

        setSum("Summen er: " + summering)
        setMerEllerMindreEnn10(summering)

        if (summering % 2 === 0) {
            setSumCheck("Summen er et partall")
        }else {
            setSumCheck("Summen er et oddetall")
        }

        if (summering > 10) {
            setMerEllerMindreEnn10("Summen er større enn 10")
        } else {
            setMerEllerMindreEnn10("Summen er mindre enn 10")
        }

    }

    return(
        <>

            <h1>Tilfeldig tall</h1>
            <button onClick={nyttTall}>Nytt tall</button>
            <p>number one: {random1}</p>
            <p>{number1Check}</p>
            <p>number two: {random2}</p>
            <p>{number2Check}</p>
            
            <br />

            <button onClick={Submit}>submit</button>
            <button onClick={summering}>Finn sum</button> 
            <p>{sum}</p>
            <p>{sumCheck}</p>
            <p>{merEllerMindreEnn10}</p>
            
            

        </>
    )
}

