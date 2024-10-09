import { useState } from 'react'
import './css/App.css'
import Todo from './Todo'
import Calculator from './lengde_kalk'
import TextField from './textfield.jsx'
import Skjema from './Skjema.jsx'
import Partall from './partall.jsx'
import Tilfeldig from './Tilfeldig.jsx'
import Vokal from './Vokal.jsx'
import KlasseKart from './Klassekart.jsx'

export default function App() {
  
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  function prosses(input){
  if(input === "Tilfeldig"){
    setOutput(<Tilfeldig />) 
  }
  }

  return (
    <>
    {/* <Todo /> */}
    {/* <Calculator /> */}
    {/* <TextField /> */}
    {/* <Skjema /> */}
    {/* <Partall /> */}
    {/* <Tilfeldig /> */}
    {/* <Vokal /> */}
    {/* <KlasseKart /> */}

    <p>Aktiver applikasjon</p>
    
    <select>
      <option value="Empty"></option>
      <option onClick={(prosses("Tilfeldig"))}>Tilfeldig</option>
      <option onClick={(prosses("Partall"))}>Partall</option>
      <option onClick={(prosses("Skjema"))}>Skjema</option>
    </select>
    
    {output}
    
    </>
  )
}


