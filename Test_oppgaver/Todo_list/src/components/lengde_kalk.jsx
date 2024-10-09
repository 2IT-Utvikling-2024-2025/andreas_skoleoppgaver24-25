import {useState} from 'react'

export default function Calculator(){

    const [Cent, setCent] = useState("");
    const [Inch, setInch] = useState("");

    const changeCent = (event) => {
        event.preventDefault();
        setCent(Cent * 0.3937)
    }
    const changeInch = (event) => {
        event.preventDefault();
        setInch(Inch * 2.54)
    }


    return(
        <>

            <h1>Calculator</h1>

            <p>Centimeters to Inches</p>

            <form onSubmit={changeCent}>
                <label>
                    <input className="Input" type="number" step="any" 
                    value={Cent}
                    onChange={(i) => setCent(i.target.value)}
                    />
                </label>
            </form>

            <p>Inches to Centimeters</p>
            <form onSubmit={changeInch}>
                <label>
                    <input className="Input" type="number" step="any"
                    value={Inch}
                    onChange={(i) => setInch(i.target.value)}
                    />
                </label>
            </form>




        </>
    )

}