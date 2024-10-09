import { useState } from 'react'

export default function Partall() {

    const [Tall, setTall] = useState("");

    function Submit(event) {
        event.preventDefault();

        if (Tall % 2 === 0) {
            console.log("Tallet er partall")
        } else {
            console.log("Tallet er oddetal")
        }
    }

    return(
        <form onSubmit={Submit}>
            <input type="number" 
            value={Tall}
            onChange={(i) => setTall(i.target.value)}
            />
        </form>
        
    )
}