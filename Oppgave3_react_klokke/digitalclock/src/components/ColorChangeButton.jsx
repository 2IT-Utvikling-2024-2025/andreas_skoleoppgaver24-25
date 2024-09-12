import { useEffect, useState } from "react"

export default function ColorButton(){


    const [color, setColor] = useState("#FFFFFF")

    useEffect(() => {
        console.log(color)
        document.body.style.backgroundColor = color
    }, [color])

    return(
        <>
            <div>
                <p>Choose color</p>
                <input type="color" id="head" name="head" onChange={(input) => setColor(input.target.value)}/>
            </div>
        </>
    )
}