import { useState } from 'react'


export default function Sverige(){

    const [nok, setNok] = useState(0);
    const [sek, setSek] = useState(0);

    const changeNok = (event) => {
        event.preventDefault();
        setSek(nok * 0.96)
    }
    const changeSek = (event) => {
        event.preventDefault();
        setNok(sek * 1.04)
    }
    return(
        <>
            <p>NOK</p>
            <form onSubmit={changeNok}>
                <label>
                    <input className="Input" type="number" step="any" 
                    value={nok}
                    onChange={(i) => setNok(i.target.value)}
                    />
                </label>
            </form>

            <p>SEK</p>
            <form onSubmit={changeSek}>
                <label>
                    <input className="Input" type="number" step="any"
                    value={sek}
                    onChange={(i) => setSek(i.target.value)}
                    />
                </label>
            </form>
        
        
        
        </>
    )
    
}