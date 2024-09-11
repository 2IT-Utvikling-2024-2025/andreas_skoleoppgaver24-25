import './css/button.css'
import {useState} from 'react'

export default function MyButton(){

    const[click, setClick] = useState(0)

    function buttonClick(){
        setClick(click + 1)
    }

    return (
        <button className="buttonStyle" onClick={buttonClick}>
            Pressed {click} times
        </button>
    );
}