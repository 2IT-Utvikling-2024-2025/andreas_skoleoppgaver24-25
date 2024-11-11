import { useState } from "react"

import Student from "./Student"
import Section from "./section.jsx"
import ClasslistInput from "./ClasslistInput"

export default function Classlist(){

   

    return(
        <>

        <h1>Classlist</h1>

        <ClasslistInput />
        <Section />


        </>
    )
}