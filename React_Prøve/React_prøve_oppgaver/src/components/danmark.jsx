import { useState } from 'react'


export default function Danmark(){

    const [nok, setNok] = useState(0);
    const [dkk, setDkk] = useState(0);

    const changeNok = (event) => {
        event.preventDefault();
        setDkk(nok * 0.63)
    }
    const changeDkk = (event) => {
        event.preventDefault();
        setNok(dkk * 1.58)
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

            <p>DKK</p>
            <form onSubmit={changeDkk}>
                <label>
                    <input className="Input" type="number" step="any" 
                    value={dkk}
                    onChange={(i) => setDkk(i.target.value)}
                    />
                </label>
            </form>
        
        </>
    )
    
}