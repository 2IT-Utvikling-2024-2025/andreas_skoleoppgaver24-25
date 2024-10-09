import { useState } from 'react'


export default function Italia(){

    const [nok, setNok] = useState(0);
    const [euro, setEuro] = useState(0);

    const changeNok = (event) => {
        event.preventDefault();
        setEuro(nok * 0.085)
    }
    const changeeuro = (event) => {
        event.preventDefault();
        setNok(euro * 11.77)
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

            <p>Euro</p>
            <form onSubmit={changeeuro}>
                <label>
                    <input className="Input" type="number" step="any" 
                    value={euro}
                    onChange={(i) => setEuro(i.target.value)}
                    />
                </label>
            </form>
        
        </>
    )
    
}