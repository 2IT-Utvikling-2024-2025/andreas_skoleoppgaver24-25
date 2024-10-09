import { useState } from 'react'


export default function Kanada(){

    const [nok, setNok] = useState(0);
    const [cad, setCad] = useState(0);

    const changeNok = (event) => {
        event.preventDefault();
        setCad(nok * 0.13)
    }
    const changeCad = (event) => {
        event.preventDefault();
        setNok(cad * 7.86)
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

            <p>CAD</p>
            <form onSubmit={changeCad}>
                <label>
                    <input className="Input" type="number" step="any" 
                    value={cad}
                    onChange={(i) => setCad(i.target.value)}
                    />
                </label>
            </form>
        
        
        
        </>
    )
    
}